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
  companyName: 'DMR & ASSOCIATES',
  tagline: 'Practicing Company Secretaries',
  firmType: 'Consultation and Advisory',
  yearEstablished: '2014',
  regNumber: 'F14081',
  aboutFirm: 'DMR & ASSOCIATES is a firm of practicing Company Secretaries engaged in providing corporate compliance, consultancy, and advisory services since 2014. The firm has a wide network of professionals equipped to cater to varied corporate sectors.',
  phone: '8762813071',
  whatsapp: '8762813071',
  email: 'cs.raikar@gmail.com',
  address: 'Sai Eshwar Plaza, 1st Floor, SPM Road',
  city: 'Belgaum',
  state: 'Karnataka',
  workingHours: '10:00 AM to 6:00 PM',
  teamMemberName: 'CS Yogesh Angadi',
  teamMemberRole: 'Senior Associate',
  showGoogleMaps: false,
  accentColor: 'cyan'
};

const CustomizerContext = createContext<CustomizerContextType | undefined>(undefined);

export const CustomizerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<PrototypeConfig>(() => {
    const saved = localStorage.getItem('apex_cs_prototype_config');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // If the saved config is the old placeholder or missing key fields, use DEFAULT_CONFIG
        if (parsed.companyName === '[YOUR COMPANY NAME]' || !parsed.regNumber || parsed.regNumber === 'ICSI-PCS-XXXXX') {
          return DEFAULT_CONFIG;
        }
        return { ...DEFAULT_CONFIG, ...parsed };
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
