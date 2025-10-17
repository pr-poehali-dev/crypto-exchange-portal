import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const cryptoData = [
  { symbol: 'BTC', name: 'Bitcoin', price: 43250.50, change: 2.45, icon: '₿' },
  { symbol: 'ETH', name: 'Ethereum', price: 2280.30, change: -1.23, icon: 'Ξ' },
  { symbol: 'TON', name: 'Toncoin', price: 2.45, change: 5.67, icon: '💎' },
  { symbol: 'USDT', name: 'Tether', price: 1.00, change: 0.01, icon: '₮' },
  { symbol: 'BNB', name: 'BNB', price: 312.80, change: 3.21, icon: '🔶' },
  { symbol: 'SOL', name: 'Solana', price: 98.50, change: -2.15, icon: '◎' },
];

const walletAssets = [
  { symbol: 'BTC', name: 'Bitcoin', amount: 0.5432, value: 23500.50, icon: '₿' },
  { symbol: 'ETH', name: 'Ethereum', amount: 3.2156, value: 7332.80, icon: 'Ξ' },
  { symbol: 'TON', name: 'Toncoin', amount: 1250, value: 3062.50, icon: '💎' },
  { symbol: 'USDT', name: 'Tether', amount: 5000, value: 5000.00, icon: '₮' },
];

export default function Index() {
  const [activeTab, setActiveTab] = useState('home');
  const [fromCurrency, setFromCurrency] = useState('BTC');
  const [toCurrency, setToCurrency] = useState('ETH');
  const [exchangeAmount, setExchangeAmount] = useState('');

  const totalBalance = walletAssets.reduce((sum, asset) => sum + asset.value, 0);

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-md mx-auto">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsContent value="home" className="mt-0 space-y-6 p-6">
            <div className="flex items-center justify-between">
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <Icon name="MessageCircle" size={24} />
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 h-12 font-medium">
                <Icon name="Snowflake" size={18} className="mr-2" />
                Tonkeeper
                <Icon name="ChevronDown" size={18} className="ml-2" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <Icon name="Settings" size={24} />
              </Button>
            </div>

            <div className="text-center space-y-2 py-8">
              <div className="flex items-center justify-center gap-3">
                <h1 className="text-6xl font-bold">{totalBalance.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} $</h1>
                <Icon name="Battery" size={32} className="text-muted-foreground" />
              </div>
              <p className="text-muted-foreground">Обновление</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <button className="flex flex-col items-center gap-2 p-4 rounded-2xl hover:bg-card transition-colors">
                <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center">
                  <Icon name="ArrowUp" size={24} />
                </div>
                <span className="text-sm text-muted-foreground">Отправить</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 rounded-2xl hover:bg-card transition-colors">
                <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center">
                  <Icon name="ArrowDown" size={24} />
                </div>
                <span className="text-sm text-muted-foreground">Получить</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 rounded-2xl hover:bg-card transition-colors">
                <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center">
                  <Icon name="Scan" size={24} />
                </div>
                <span className="text-sm text-muted-foreground">Сканировать</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <button className="flex flex-col items-center gap-2 p-4 rounded-2xl hover:bg-card transition-colors">
                <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center">
                  <Icon name="ArrowLeftRight" size={24} />
                </div>
                <span className="text-sm text-muted-foreground">Обменять</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 rounded-2xl hover:bg-card transition-colors">
                <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center">
                  <Icon name="DollarSign" size={24} />
                </div>
                <span className="text-sm text-muted-foreground">Купить TON</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 rounded-2xl hover:bg-card transition-colors">
                <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center">
                  <Icon name="TrendingUp" size={24} />
                </div>
                <span className="text-sm text-muted-foreground">Застейкать</span>
              </button>
            </div>

            <Card className="bg-card border-border p-6 rounded-3xl">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="Key" size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Сохраните секретный ключ</h3>
                  <p className="text-sm text-muted-foreground">Без ключа восстановить кошелёк невозможно</p>
                </div>
                <Icon name="ChevronRight" size={20} className="text-muted-foreground mt-1" />
              </div>
            </Card>

            <div className="space-y-2">
              <Card className="bg-card border-border p-4 rounded-3xl flex items-center justify-between hover:bg-card/80 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="Bell" size={20} className="text-primary" />
                  </div>
                  <span className="font-medium">Включите уведомления о транзакциях</span>
                </div>
                <div className="w-12 h-6 rounded-full bg-muted"></div>
              </Card>
              
              <Card className="bg-card border-border p-4 rounded-3xl flex items-center justify-between hover:bg-card/80 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="Fingerprint" size={20} className="text-primary" />
                  </div>
                  <span className="font-medium">Включите биометрию для подтверждения транзакций</span>
                </div>
                <div className="w-12 h-6 rounded-full bg-muted"></div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="markets" className="mt-0 space-y-4 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Рынки</h2>
              <Button variant="ghost" size="icon">
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
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-2xl">
                        {crypto.icon}
                      </div>
                      <div>
                        <div className="font-semibold">{crypto.symbol}</div>
                        <div className="text-sm text-muted-foreground">{crypto.name}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">${crypto.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
                      <div className={`text-sm ${crypto.change >= 0 ? 'text-primary' : 'text-destructive'}`}>
                        {crypto.change >= 0 ? '+' : ''}{crypto.change}%
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="wallet" className="mt-0 space-y-4 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Кошелёк</h2>
              <div className="text-2xl font-bold">${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
            </div>

            <div className="space-y-2">
              {walletAssets.map((asset) => (
                <Card
                  key={asset.symbol}
                  className="bg-card border-border p-4 rounded-2xl hover:bg-card/80 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-2xl">
                        {asset.icon}
                      </div>
                      <div>
                        <div className="font-semibold">{asset.symbol}</div>
                        <div className="text-sm text-muted-foreground">{asset.name}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">${asset.value.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
                      <div className="text-sm text-muted-foreground">{asset.amount.toLocaleString('en-US', { maximumFractionDigits: 4 })}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-14 rounded-2xl font-semibold text-base mt-6">
              <Icon name="Plus" size={20} className="mr-2" />
              Добавить активы
            </Button>
          </TabsContent>

          <TabsContent value="exchange" className="mt-0 space-y-6 p-6">
            <h2 className="text-2xl font-bold mb-6">Обмен</h2>

            <div className="space-y-4">
              <Card className="bg-card border-border p-4 rounded-2xl">
                <div className="text-sm text-muted-foreground mb-2">Отдаёте</div>
                <div className="flex items-center justify-between">
                  <input
                    type="number"
                    value={exchangeAmount}
                    onChange={(e) => setExchangeAmount(e.target.value)}
                    placeholder="0.00"
                    className="bg-transparent text-3xl font-bold outline-none w-full"
                  />
                  <Button variant="outline" className="rounded-full border-border">
                    <span className="text-xl mr-2">{cryptoData.find(c => c.symbol === fromCurrency)?.icon}</span>
                    {fromCurrency}
                    <Icon name="ChevronDown" size={16} className="ml-2" />
                  </Button>
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  Доступно: {walletAssets.find(a => a.symbol === fromCurrency)?.amount.toLocaleString('en-US', { maximumFractionDigits: 4 }) || '0'} {fromCurrency}
                </div>
              </Card>

              <div className="flex justify-center">
                <button className="w-12 h-12 rounded-full bg-card border-2 border-border flex items-center justify-center hover:bg-muted transition-colors">
                  <Icon name="ArrowDownUp" size={20} />
                </button>
              </div>

              <Card className="bg-card border-border p-4 rounded-2xl">
                <div className="text-sm text-muted-foreground mb-2">Получаете</div>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold">
                    {exchangeAmount ? (parseFloat(exchangeAmount) * 18.9).toFixed(4) : '0.00'}
                  </div>
                  <Button variant="outline" className="rounded-full border-border">
                    <span className="text-xl mr-2">{cryptoData.find(c => c.symbol === toCurrency)?.icon}</span>
                    {toCurrency}
                    <Icon name="ChevronDown" size={16} className="ml-2" />
                  </Button>
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  1 {fromCurrency} ≈ 18.9 {toCurrency}
                </div>
              </Card>

              <Card className="bg-secondary border-border p-4 rounded-2xl">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Комиссия сети</span>
                  <span className="font-medium">~0.01 TON</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-muted-foreground">Курс</span>
                  <span className="font-medium">1 {fromCurrency} = 18.9 {toCurrency}</span>
                </div>
              </Card>

              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-14 rounded-2xl font-semibold text-base"
                disabled={!exchangeAmount || parseFloat(exchangeAmount) <= 0}
              >
                Обменять
              </Button>
            </div>
          </TabsContent>

          <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border">
            <div className="max-w-md mx-auto">
              <TabsList className="w-full h-20 bg-transparent grid grid-cols-4 gap-0">
                <TabsTrigger
                  value="home"
                  className="flex flex-col items-center gap-1 data-[state=active]:text-primary data-[state=active]:bg-transparent"
                >
                  <Icon name="Wallet" size={24} />
                  <span className="text-xs">Кошелёк</span>
                </TabsTrigger>
                <TabsTrigger
                  value="markets"
                  className="flex flex-col items-center gap-1 data-[state=active]:text-primary data-[state=active]:bg-transparent"
                >
                  <Icon name="Clock" size={24} />
                  <span className="text-xs">Рынки</span>
                </TabsTrigger>
                <TabsTrigger
                  value="exchange"
                  className="flex flex-col items-center gap-1 data-[state=active]:text-primary data-[state=active]:bg-transparent"
                >
                  <Icon name="Compass" size={24} />
                  <span className="text-xs">Обмен</span>
                </TabsTrigger>
                <TabsTrigger
                  value="wallet"
                  className="flex flex-col items-center gap-1 data-[state=active]:text-primary data-[state=active]:bg-transparent"
                >
                  <Icon name="Star" size={24} />
                  <span className="text-xs">Активы</span>
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
