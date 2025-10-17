import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const cryptoData = [
  { symbol: 'SHRD', name: 'ShredorCoin', price: 43250.50, change: 2.45, amount: 0.15 },
  { symbol: 'TRT', name: 'TortleMoney', price: 2280.30, change: -1.23, amount: 0.5 },
  { symbol: 'LEO', name: 'LeoCoin', price: 2.45, change: 5.67, amount: 1250 },
  { symbol: 'RAPH', name: 'RaphToken', price: 1.00, change: 0.01, amount: 5000 },
  { symbol: 'DONY', name: 'DonyMoney', price: 312.80, change: 3.21, amount: 2.5 },
  { symbol: 'MKKY', name: 'MikkyToken', price: 98.50, change: -2.15, amount: 10 },
  { symbol: 'DNYA', name: 'DanyaKazyk', price: 8061.20, change: 4.87, amount: 1.5 },
];

const getRandomBalance = () => {
  return (Math.random() * (19482.49 - 1583.49) + 1583.49);
};

export default function Index() {
  const [activeTab, setActiveTab] = useState('main');
  const [exchangeAmount, setExchangeAmount] = useState('');
  const [totalBalance, setTotalBalance] = useState(0);
  const [showDevelopers, setShowDevelopers] = useState(false);
  const { toast } = useToast();
  const balanceChange = 6.18;

  useEffect(() => {
    setTotalBalance(getRandomBalance());
  }, []);

  const handlePizzaOrder = () => {
    toast({
      title: '🍕 Пицца заказана!',
      description: 'Ваш заказ принят и скоро будет доставлен.',
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-[#1a1535]">
      <div className="max-w-md mx-auto pb-6">
        <div className="p-6 pt-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 w-14 h-14 rounded-full bg-purple-950"></div>
                <img 
                  src="https://cdn.poehali.dev/files/6d7c86ba-3290-48b5-9fa0-1cd9608f67d9.png" 
                  alt="MutagenFinance Logo" 
                  className="w-14 h-14 object-contain relative z-10"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">MutagenFinance</h1>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="text-gray-400">
              <Icon name="Settings" size={24} />
            </Button>
          </div>

          <div className="flex gap-1 mb-8 bg-secondary/50 p-1 rounded-2xl">
            <button
              onClick={() => setActiveTab('main')}
              className={`flex-1 py-2.5 px-2 rounded-xl font-medium text-sm transition-all ${
                activeTab === 'main'
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Главная
            </button>
            <button
              onClick={() => setActiveTab('markets')}
              className={`flex-1 py-2.5 px-2 rounded-xl font-medium text-sm transition-all ${
                activeTab === 'markets'
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Рынки
            </button>
            <button
              onClick={() => setActiveTab('exchange')}
              className={`flex-1 py-2.5 px-2 rounded-xl font-medium text-sm transition-all ${
                activeTab === 'exchange'
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Обмен
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex-1 py-2.5 px-2 rounded-xl font-medium text-sm transition-all ${
                activeTab === 'profile'
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Профиль
            </button>
          </div>

          {activeTab === 'main' && (
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-card to-[#1e1640] border-border p-8 rounded-3xl">
                <div className="flex items-start justify-between mb-2">
                  <div className="text-gray-400 text-sm">Общий баланс</div>
                  <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    +{balanceChange}%
                  </div>
                </div>
                <div className="text-5xl font-bold text-white mb-2">
                  ${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div className="text-gray-400 text-sm">за последние 24 часа</div>
              </Card>

              <div className="grid grid-cols-2 gap-3">
                <Button className="h-auto py-6 bg-secondary hover:bg-secondary/80 border border-border rounded-2xl flex flex-col items-center gap-2">
                  <Icon name="ArrowUp" size={24} className="text-gray-400" />
                  <span className="text-gray-300 font-medium">Отправить</span>
                </Button>
                <Button className="h-auto py-6 bg-secondary hover:bg-secondary/80 border border-border rounded-2xl flex flex-col items-center gap-2">
                  <Icon name="ArrowDown" size={24} className="text-gray-400" />
                  <span className="text-gray-300 font-medium">Получить</span>
                </Button>
                <Button className="h-auto py-6 bg-primary hover:bg-primary/90 rounded-2xl flex flex-col items-center gap-2 shadow-lg shadow-primary/30">
                  <Icon name="ArrowLeftRight" size={24} className="text-white" />
                  <span className="text-white font-medium">Обменять</span>
                </Button>
                <Button onClick={handlePizzaOrder} className="h-auto py-6 bg-orange-500 hover:bg-orange-600 rounded-2xl flex flex-col items-center gap-2 shadow-lg shadow-orange-500/30">
                  <span className="text-3xl">🍕</span>
                  <span className="text-white font-medium">Пицца</span>
                </Button>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4">Мои активы</h3>
                <div className="space-y-2">
                  {cryptoData.slice(0, 2).map((crypto) => (
                    <Card
                      key={crypto.symbol}
                      className="bg-card border-border p-4 rounded-2xl hover:bg-card/80 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-purple-900/30 flex items-center justify-center">
                            <span className="text-xl font-bold text-primary">{crypto.symbol[0]}</span>
                          </div>
                          <div>
                            <div className="font-semibold text-white">{crypto.name}</div>
                            <div className="text-sm text-gray-400">{crypto.amount} {crypto.symbol}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-white">${(crypto.price * crypto.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
                          <div className={`text-sm ${crypto.change >= 0 ? 'text-primary' : 'text-red-400'}`}>
                            {crypto.change >= 0 ? '+' : ''}{crypto.change}%
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'markets' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-bold text-white">Криптовалюты</h2>
                <Button variant="ghost" size="icon" className="text-gray-400">
                  <Icon name="Search" size={20} />
                </Button>
              </div>

              <div className="space-y-2">
                {cryptoData.map((crypto) => (
                  <Card
                    key={crypto.symbol}
                    className="bg-card border-border p-4 rounded-2xl hover:bg-card/80 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-purple-900/30 flex items-center justify-center">
                          <span className="text-xl font-bold text-primary">{crypto.symbol[0]}</span>
                        </div>
                        <div>
                          <div className="font-semibold text-white">{crypto.name}</div>
                          <div className="text-sm text-gray-400">{crypto.symbol}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-white">${crypto.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
                        <div className={`text-sm ${crypto.change >= 0 ? 'text-primary' : 'text-red-400'}`}>
                          {crypto.change >= 0 ? '+' : ''}{crypto.change}%
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'exchange' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Обмен криптовалюты</h2>

              <div className="space-y-4">
                <Card className="bg-card border-border p-5 rounded-2xl">
                  <div className="text-sm text-gray-400 mb-3">Вы отдаёте</div>
                  <div className="flex items-center justify-between mb-3">
                    <input
                      type="number"
                      value={exchangeAmount}
                      onChange={(e) => setExchangeAmount(e.target.value)}
                      placeholder="0.00"
                      className="bg-transparent text-3xl font-bold outline-none w-full text-white"
                    />
                    <Button variant="outline" className="rounded-full border-border bg-secondary hover:bg-secondary/80 text-white">
                      BTC
                      <Icon name="ChevronDown" size={16} className="ml-2" />
                    </Button>
                  </div>
                  <div className="text-sm text-gray-400">
                    Доступно: 0.15 BTC
                  </div>
                </Card>

                <div className="flex justify-center">
                  <button className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center shadow-lg shadow-primary/30 transition-all">
                    <Icon name="ArrowDownUp" size={20} className="text-white" />
                  </button>
                </div>

                <Card className="bg-card border-border p-5 rounded-2xl">
                  <div className="text-sm text-gray-400 mb-3">Вы получаете</div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-3xl font-bold text-white">
                      {exchangeAmount ? (parseFloat(exchangeAmount) * 18.9).toFixed(4) : '0.00'}
                    </div>
                    <Button variant="outline" className="rounded-full border-border bg-secondary hover:bg-secondary/80 text-white">
                      ETH
                      <Icon name="ChevronDown" size={16} className="ml-2" />
                    </Button>
                  </div>
                  <div className="text-sm text-gray-400">
                    1 BTC ≈ 18.9 ETH
                  </div>
                </Card>

                <Card className="bg-secondary/50 border-border p-4 rounded-2xl">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-400">Комиссия сети</span>
                    <span className="text-white font-medium">~$2.50</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Обменный курс</span>
                    <span className="text-white font-medium">1 BTC = 18.9 ETH</span>
                  </div>
                </Card>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white h-14 rounded-2xl font-semibold text-base shadow-lg shadow-primary/30"
                  disabled={!exchangeAmount || parseFloat(exchangeAmount) <= 0}
                >
                  Обменять
                </Button>
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">Профиль</h2>

              <Card className="bg-gradient-to-br from-card to-[#1e1640] border-border p-6 rounded-3xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-purple-700 flex items-center justify-center">
                    <Icon name="User" size={32} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">Пользователь</div>
                    <div className="text-gray-400">user@example.com</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-secondary/50 rounded-xl p-4">
                    <div className="text-gray-400 text-sm mb-1">Всего активов</div>
                    <div className="text-2xl font-bold text-white">6</div>
                  </div>
                  <div className="bg-secondary/50 rounded-xl p-4">
                    <div className="text-gray-400 text-sm mb-1">Портфель</div>
                    <div className="text-2xl font-bold text-white">${totalBalance.toLocaleString('en-US', { maximumFractionDigits: 0 })}</div>
                  </div>
                </div>
              </Card>

              <div className="space-y-2">
                <Card className="bg-card border-border p-4 rounded-2xl hover:bg-card/80 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Icon name="Shield" size={20} className="text-primary" />
                      </div>
                      <span className="text-white font-medium">Безопасность</span>
                    </div>
                    <Icon name="ChevronRight" size={20} className="text-gray-400" />
                  </div>
                </Card>

                <Card className="bg-card border-border p-4 rounded-2xl hover:bg-card/80 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Icon name="Bell" size={20} className="text-primary" />
                      </div>
                      <span className="text-white font-medium">Уведомления</span>
                    </div>
                    <Icon name="ChevronRight" size={20} className="text-gray-400" />
                  </div>
                </Card>

                <Card className="bg-card border-border p-4 rounded-2xl hover:bg-card/80 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Icon name="HelpCircle" size={20} className="text-primary" />
                      </div>
                      <span className="text-white font-medium">Поддержка</span>
                    </div>
                    <Icon name="ChevronRight" size={20} className="text-gray-400" />
                  </div>
                </Card>

                <Card 
                  className="bg-card border-border p-4 rounded-2xl hover:bg-card/80 transition-colors cursor-pointer"
                  onClick={() => setShowDevelopers(!showDevelopers)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Icon name="Code" size={20} className="text-primary" />
                      </div>
                      <span className="text-white font-medium">Разработчики</span>
                    </div>
                    <Icon name={showDevelopers ? "ChevronDown" : "ChevronRight"} size={20} className="text-gray-400" />
                  </div>
                </Card>

                {showDevelopers && (
                  <div className="space-y-2 ml-4">
                    <Card className="bg-secondary/50 border-border p-4 rounded-2xl">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-700 flex items-center justify-center">
                          <span className="text-white font-bold text-sm">DK</span>
                        </div>
                        <div>
                          <div className="text-white font-medium">DanyaKazyk</div>
                          <div className="text-sm text-gray-400">Lead Developer</div>
                        </div>
                      </div>
                    </Card>

                    <Card className="bg-secondary/50 border-border p-4 rounded-2xl">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-700 flex items-center justify-center">
                          <span className="text-white font-bold text-sm">MK</span>
                        </div>
                        <div>
                          <div className="text-white font-medium">MironkaKartonka</div>
                          <div className="text-sm text-gray-400">Senior Developer</div>
                        </div>
                      </div>
                    </Card>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}