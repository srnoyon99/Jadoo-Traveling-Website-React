import React, { useState } from 'react';
import { Palette, Type, Layout, Settings, Save, RotateCcw, Eye, Moon, Sun } from 'lucide-react';
import NavBar from '../Component/NavBar';
import Footer from '../Component/Footer';

export default function Customization() {
  const [activeTab, setActiveTab] = useState('appearance');
  const [settings, setSettings] = useState({
    // Theme settings
    theme: 'light',
    primaryColor: '#3b82f6',
    secondaryColor: '#10b981',
    backgroundColor: '#ffffff',
    textColor: '#1f2937',
    
    // Typography settings
    fontFamily: 'Inter',
    fontSize: 'medium',
    fontWeight: 'normal',
    lineHeight: 'normal',
    
    // Layout settings
    layout: 'modern',
    sidebar: true,
    headerStyle: 'fixed',
    containerWidth: 'full',
    borderRadius: 'medium',
    
    // Content settings
    animation: true,
    shadows: true,
    gradients: false,
    spacing: 'medium'
  });

  const [previewMode, setPreviewMode] = useState(false);

  const updateSetting = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const resetSettings = () => {
    setSettings({
      theme: 'light',
      primaryColor: '#3b82f6',
      secondaryColor: '#10b981',
      backgroundColor: '#ffffff',
      textColor: '#1f2937',
      fontFamily: 'Inter',
      fontSize: 'medium',
      fontWeight: 'normal',
      lineHeight: 'normal',
      layout: 'modern',
      sidebar: true,
      headerStyle: 'fixed',
      containerWidth: 'full',
      borderRadius: 'medium',
      animation: true,
      shadows: true,
      gradients: false,
      spacing: 'medium'
    });
  };

  const saveSettings = () => {
    // Simulate saving settings
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 transition-all duration-300';
    notification.textContent = 'Settings saved successfully!';
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.remove();
    }, 3000);
  };

  const tabs = [
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'typography', label: 'Typography', icon: Type },
    { id: 'layout', label: 'Layout', icon: Layout },
    { id: 'advanced', label: 'Advanced', icon: Settings }
  ];

  const colorOptions = [
    '#3b82f6', '#ef4444', '#10b981', '#f59e0b',
    '#8b5cf6', '#ec4899', '#06b6d4', '#84cc16'
  ];

  const fontFamilies = [
    'Inter', 'Roboto', 'Open Sans', 'Lato', 
    'Montserrat', 'Poppins', 'Source Sans Pro', 'Nunito'
  ];

  const layouts = [
    { id: 'modern', name: 'Modern', description: 'Clean and minimal design' },
    { id: 'classic', name: 'Classic', description: 'Traditional layout with sidebar' },
    { id: 'creative', name: 'Creative', description: 'Bold and artistic design' },
    { id: 'minimal', name: 'Minimal', description: 'Ultra-clean and simple' }
  ];

  return (
    <>

    <div>
      <NavBar/>
    </div>

    <div className="min-h-screen bg-gray-50 pt-20 md:pt-[130px]">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center py-4 gap-4 md:gap-0">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">Website Customization</h1>
              <p className="text-xs md:text-sm text-gray-600 mt-1">Customize your website's appearance and functionality</p>
            </div>
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              <button
                onClick={() => setPreviewMode(!previewMode)}
                className="flex items-center px-3 md:px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
              >
                <Eye className="w-4 h-4 md:mr-2" />
                <span className="hidden md:inline">{previewMode ? 'Edit Mode' : 'Preview'}</span>
              </button>
              <button
                onClick={resetSettings}
                className="flex items-center px-3 md:px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
              >
                <RotateCcw className="w-4 h-4 md:mr-2" />
                <span className="hidden md:inline">Reset</span>
              </button>
              <button
                onClick={saveSettings}
                className="flex items-center px-3 md:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                <Save className="w-4 h-4 md:mr-2" />
                <span className="hidden md:inline">Save Changes</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-64 lg:flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-1 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-1 gap-1 md:gap-0">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center justify-center lg:justify-start px-2 md:px-4 py-2 md:py-3 text-center lg:text-left rounded-lg transition-all duration-200 text-sm ${
                      activeTab === tab.id
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5 lg:mr-3" />
                    <span className="hidden lg:inline">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:flex-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
              
              {/* Appearance Tab */}
              {activeTab === 'appearance' && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">Color Scheme</h3>
                    
                    {/* Theme Toggle */}
                    <div className="mb-6">
                      <label className="block text-xs md:text-sm font-medium text-gray-700 mb-3">Theme</label>
                      <div className="flex flex-wrap items-center gap-2 md:gap-4">
                        <button
                          onClick={() => updateSetting('theme', 'light')}
                          className={`flex items-center px-3 md:px-4 py-2 rounded-lg transition-all text-sm ${
                            settings.theme === 'light'
                              ? 'bg-blue-100 text-blue-700 ring-2 ring-blue-500'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          <Sun className="w-4 h-4 md:mr-2" />
                          <span className="hidden md:inline">Light</span>
                        </button>
                        <button
                          onClick={() => updateSetting('theme', 'dark')}
                          className={`flex items-center px-3 md:px-4 py-2 rounded-lg transition-all text-sm ${
                            settings.theme === 'dark'
                              ? 'bg-blue-100 text-blue-700 ring-2 ring-blue-500'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          <Moon className="w-4 h-4 md:mr-2" />
                          <span className="hidden md:inline">Dark</span>
                        </button>
                      </div>
                    </div>

                    {/* Primary Color */}
                    <div className="mb-6">
                      <label className="block text-xs md:text-sm font-medium text-gray-700 mb-3">Primary Color</label>
                      <div className="flex flex-wrap items-center gap-2 md:gap-3">
                        {colorOptions.map((color) => (
                          <button
                            key={color}
                            onClick={() => updateSetting('primaryColor', color)}
                            className={`w-10 h-10 rounded-lg transition-all ${
                              settings.primaryColor === color ? 'ring-2 ring-offset-2 ring-gray-400' : ''
                            }`}
                            style={{ backgroundColor: color }}
                          />
                        ))}
                        <input
                          type="color"
                          value={settings.primaryColor}
                          onChange={(e) => updateSetting('primaryColor', e.target.value)}
                          className="w-10 h-10 rounded-lg border border-gray-300"
                        />
                      </div>
                    </div>

                    {/* Secondary Color */}
                    <div className="mb-6">
                      <label className="block text-xs md:text-sm font-medium text-gray-700 mb-3">Secondary Color</label>
                      <div className="flex flex-wrap items-center gap-2 md:gap-3">
                        {colorOptions.map((color) => (
                          <button
                            key={color}
                            onClick={() => updateSetting('secondaryColor', color)}
                            className={`w-10 h-10 rounded-lg transition-all ${
                              settings.secondaryColor === color ? 'ring-2 ring-offset-2 ring-gray-400' : ''
                            }`}
                            style={{ backgroundColor: color }}
                          />
                        ))}
                        <input
                          type="color"
                          value={settings.secondaryColor}
                          onChange={(e) => updateSetting('secondaryColor', e.target.value)}
                          className="w-10 h-10 rounded-lg border border-gray-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Typography Tab */}
              {activeTab === 'typography' && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">Typography Settings</h3>
                    
                    {/* Font Family */}
                    <div className="mb-6">
                      <label className="block text-xs md:text-sm font-medium text-gray-700 mb-3">Font Family</label>
                      <select
                        value={settings.fontFamily}
                        onChange={(e) => updateSetting('fontFamily', e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        {fontFamilies.map((font) => (
                          <option key={font} value={font}>{font}</option>
                        ))}
                      </select>
                    </div>

                    {/* Font Size */}
                    <div className="mb-6">
                      <label className="block text-xs md:text-sm font-medium text-gray-700 mb-3">Font Size</label>
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {['small', 'medium', 'large', 'extra-large'].map((size) => (
                          <button
                            key={size}
                            onClick={() => updateSetting('fontSize', size)}
                            className={`px-3 md:px-4 py-2 rounded-lg capitalize transition-all text-xs md:text-sm ${
                              settings.fontSize === size
                                ? 'bg-blue-100 text-blue-700 ring-2 ring-blue-500'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {size.replace('-', ' ')}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Font Weight */}
                    <div className="mb-6">
                      <label className="block text-xs md:text-sm font-medium text-gray-700 mb-3">Font Weight</label>
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {['light', 'normal', 'medium', 'semibold', 'bold'].map((weight) => (
                          <button
                            key={weight}
                            onClick={() => updateSetting('fontWeight', weight)}
                            className={`px-3 md:px-4 py-2 rounded-lg capitalize transition-all text-xs md:text-sm ${
                              settings.fontWeight === weight
                                ? 'bg-blue-100 text-blue-700 ring-2 ring-blue-500'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {weight}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Layout Tab */}
              {activeTab === 'layout' && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">Layout Options</h3>
                    
                    {/* Layout Style */}
                    <div className="mb-6">
                      <label className="block text-xs md:text-sm font-medium text-gray-700 mb-3">Layout Style</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                        {layouts.map((layout) => (
                          <button
                            key={layout.id}
                            onClick={() => updateSetting('layout', layout.id)}
                            className={`p-3 md:p-4 text-left border-2 rounded-lg transition-all ${
                              settings.layout === layout.id
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <div className="font-medium text-sm md:text-base text-gray-900">{layout.name}</div>
                            <div className="text-xs md:text-sm text-gray-600 mt-1">{layout.description}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Container Width */}
                    <div className="mb-6">
                      <label className="block text-xs md:text-sm font-medium text-gray-700 mb-3">Container Width</label>
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {['compact', 'normal', 'wide', 'full'].map((width) => (
                          <button
                            key={width}
                            onClick={() => updateSetting('containerWidth', width)}
                            className={`px-3 md:px-4 py-2 rounded-lg capitalize transition-all text-xs md:text-sm ${
                              settings.containerWidth === width
                                ? 'bg-blue-100 text-blue-700 ring-2 ring-blue-500'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {width}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Sidebar Toggle */}
                    <div className="mb-6">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={settings.sidebar}
                          onChange={(e) => updateSetting('sidebar', e.target.checked)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="ml-3 text-xs md:text-sm font-medium text-gray-700">Enable Sidebar</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Advanced Tab */}
              {activeTab === 'advanced' && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">Advanced Settings</h3>
                    
                    <div className="space-y-4">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={settings.animation}
                          onChange={(e) => updateSetting('animation', e.target.checked)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="ml-3 text-xs md:text-sm font-medium text-gray-700">Enable Animations</span>
                      </label>

                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={settings.shadows}
                          onChange={(e) => updateSetting('shadows', e.target.checked)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="ml-3 text-xs md:text-sm font-medium text-gray-700">Enable Shadows</span>
                      </label>

                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={settings.gradients}
                          onChange={(e) => updateSetting('gradients', e.target.checked)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="ml-3 text-xs md:text-sm font-medium text-gray-700">Enable Gradients</span>
                      </label>
                    </div>

                    {/* Border Radius */}
                    <div className="mt-6">
                      <label className="block text-xs md:text-sm font-medium text-gray-700 mb-3">Border Radius</label>
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {['none', 'small', 'medium', 'large', 'full'].map((radius) => (
                          <button
                            key={radius}
                            onClick={() => updateSetting('borderRadius', radius)}
                            className={`px-3 md:px-4 py-2 rounded-lg capitalize transition-all text-xs md:text-sm ${
                              settings.borderRadius === radius
                                ? 'bg-blue-100 text-blue-700 ring-2 ring-blue-500'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {radius}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Preview Section */}
            {previewMode && (
              <div className="mt-6 md:mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">Live Preview</h3>
                <div 
                  className="border-2 border-dashed border-gray-300 rounded-lg p-4 md:p-8 min-h-64"
                  style={{
                    backgroundColor: settings.theme === 'dark' ? '#1f2937' : settings.backgroundColor,
                    color: settings.theme === 'dark' ? '#f9fafb' : settings.textColor,
                    fontFamily: settings.fontFamily,
                  }}
                >
                  <div className="text-center">
                    <div 
                      className="inline-block px-4 md:px-6 py-2 md:py-3 rounded-lg text-white font-medium mb-3 md:mb-4 text-sm md:text-base"
                      style={{ backgroundColor: settings.primaryColor }}
                    >
                      Primary Button
                    </div>
                    <div 
                      className="inline-block px-4 md:px-6 py-2 md:py-3 rounded-lg text-white font-medium mb-3 md:mb-4 ml-2 md:ml-4 text-sm md:text-base"
                      style={{ backgroundColor: settings.secondaryColor }}
                    >
                      Secondary Button
                    </div>
                    <h2 className={`text-lg md:text-2xl font-${settings.fontWeight} mb-3 md:mb-4`}>
                      Sample Heading Text
                    </h2>
                    <p className={`text-${settings.fontSize} leading-${settings.lineHeight} text-xs md:text-sm`}>
                      This is a preview of how your website will look with the current settings. 
                      The layout, colors, and typography will be applied according to your choices.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

    <div>
      <Footer/>
    </div>

    </>
  );
}