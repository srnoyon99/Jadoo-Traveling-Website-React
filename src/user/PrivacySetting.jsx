import { ChevronRight, User, Lock, Shield, CreditCard, Eye, Tag, Ban, FileText, Bell, Accessibility, Globe, } from 'lucide-react';
import { Link } from 'react-router';


export default function PrivacySetting() {
  const sections = [
    {
      id: 'Jadoo Accounts Centre ',
      title: 'Jadoo Accounts Centre',
      icon: User,
      items: [
        { name: 'Personal Details', icon: User, link: "/personaldetails" , description: 'Manage your personal information' },
        { name: 'Password and Security', icon: Lock, link: "/passwordchange" , description: 'Update password and security settings' },
        { name: 'Verification', icon: Shield, link: "/" , description: 'Verify your account' },
        { name: 'Payment System', icon: CreditCard, link: "/" , description: 'Manage payment methods' }
      ]
    },
    {
      id: 'audience',
      title: 'Audience and Visibility',
      icon: Eye,
      items: [
        { name: 'Profile Details', icon: User, link: "/" , description: 'Control who can see your profile' },
        { name: 'Offers', icon: Tag, link: "/" , description: 'Manage promotional offers' },
        { name: 'Add Blocking', icon: Ban, link: "/" , description: 'Block unwanted content' },
        { name: 'Pages', icon: FileText, link: "/" , description: 'Manage your pages' }
      ]
    },
    {
      id: 'preferences',
      title: 'Preferences',
      icon: Bell,
      items: [
        { name: 'Notifications', icon: Bell, link: "/" , description: 'Customize notification settings' },
        { name: 'Accessibility', icon: Accessibility, link: "/" , description: 'Accessibility options' },
        { name: 'Languages and Region', icon: Globe, link: "/" , description: 'Set language and region preferences' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-20 md:pt-[120px]  ">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">Settings & Privacy</h1>
          <p className="text-slate-600">Manage your account settings and preferences</p>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {sections.map((section) => {
            const SectionIcon = section.icon;

            return (
              <div key={section.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md">
                {/* Section Header */}
                <div className="px-6 py-5 flex items-center justify-between bg-slate-50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <SectionIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <h2 className="text-xl font-semibold text-slate-800">{section.title}</h2>
                      <p className="text-sm text-slate-500">{section.items.length} options</p>
                    </div>
                  </div>
                </div>

                {/* Section Items */}
                {(
                  <div className="border-t border-slate-100">
                    {section.items.map((item, index) => {
                      const ItemIcon = item.icon;
                      return (
                         <Link
                         key={index}
                         to={item.link}
                          className="w-full px-6 py-4 flex items-center gap-4 hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-b-0"
                        >
                          <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <ItemIcon className="w-5 h-5 text-slate-600" />
                          </div>
                          <div className="flex-1 text-left">
                            <h3 className="font-medium text-slate-800">{item.name}</h3>
                            <p className="text-sm text-slate-500">{item.description}</p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-slate-300" />
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500">
            Need help? <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Visit our support center</a>
          </p>
        </div>
      </div>
    </div>
  );
}