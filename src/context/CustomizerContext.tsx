import React, { createContext, useContext, useState, useEffect } from 'react';
import { PrototypeConfig } from '../types';

interface CustomizerContextType {
  config: PrototypeConfig;
  updateConfig: (partial: Partial<PrototypeConfig>) => void;
  resetConfig: () => void;
  isCustomizerOpen: boolean;
  setIsCustomizerOpen: (open: boolean) => void;
  isConsultationOpen: boolean;
  setIsConsultationOpen: (open: boolean) => void;
  consultationPreselect: string;
  openConsultationWithService: (serviceName: string) => void;
}

const DEFAULT_CONFIG: PrototypeConfig = {
  companyName: '[YOUR COMPANY NAME]',
  tagline: 'Corporate Compliance. Simplified.',
  email: 'hello@yourcompany.com',
  phone: '+91 XXXXX XXXXX',
  location: 'India (New Delhi / Mumbai)',
  regNumber: 'ICSI-PCS-XXXXX',
  accentColor: 'cyan'
};

const CustomizerContext = createContext<CustomizerContextType | undefined>(undefined);

export const CustomizerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<PrototypeConfig>(() => {
    const saved = localStorage.getItem('apex_cs_prototype_config');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved config', e);
      }
    }
    return DEFAULT_CONFIG;
  });

  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationPreselect, setConsultationPreselect] = useState('');

  useEffect(() => {
    localStorage.setItem('apex_cs_prototype_config', JSON.stringify(config));
  }, [config]);

  const updateConfig = (partial: Partial<PrototypeConfig>) => {
    setConfig(prev => ({ ...prev, ...partial }));
  };

  const resetConfig = () => {
    setConfig(DEFAULT_CONFIG);
  };

  const openConsultationWithService = (serviceName: string) => {
    setConsultationPreselect(serviceName);
    setIsConsultationOpen(true);
  };

  return (
    <CustomizerContext.Provider
      value={{
        config,
        updateConfig,
        resetConfig,
        isCustomizerOpen,
        setIsCustomizerOpen,
        isConsultationOpen,
        setIsConsultationOpen,
        consultationPreselect,
        openConsultationWithService
      }}
    >
      {children}
    </CustomizerContext.Provider>
  );
};

export const useCustomizer = () => {
  const ctx = useContext(CustomizerContext);
  if (!ctx) {
    throw new Error('useCustomizer must be used within a CustomizerProvider');
  }
  return ctx;
};
