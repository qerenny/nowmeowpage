# 🪟 Инструкция по подключению NowMeow VPN на **Windows** через Nekoray (режим Tunneling)

## ❗ Кому подходит эта инструкция?

🔹 Эта инструкция — **для тех, кто хочет туннелировать только отдельные приложения** через VPN.  
🔹 Если вы хотите подключить весь трафик — [перейдите к обычной инструкции для Windows](/ru/devices/windows.html).



## 💾 Шаг 1. Скачайте и распакуйте Nekoray

1. Нажмите кнопку "**Перейти к моей подписке**" в Telegram-боте

<div align="center">
  <img src="/pics/shared/main_menu.png" alt="Перейти к подписке" width="450" style="border-radius: 12px; margin: 1rem 0;" />
</div>

2. Перейдите в раздел **Windows Nekoray** в инструкции

<div align="center">
  <img src="/pics/shared/instructions.png" alt="Инструкции" width="450" style="border-radius: 12px; margin: 1rem 0;" />
</div>

3. Нажмите **"Скачать с GitHub"**:

<div align="center">
  <img src="/pics/windows_nekoray/instructions_nekoray.png" alt="Скачать Nekoray" width="400" style="border-radius: 12px; margin: 1rem 0;" />
</div>

4. Распакуйте архив `.zip` в любую удобную папку:

<div align="center">
  <img src="/pics/windows_nekoray/extraction.gif" alt="Распаковка Nekoray" width="600" style="border-radius: 12px; margin: 1rem 0;" />
</div>


## 🌐 Шаг 2. Запустите программу и включите режим TUN

1. Откройте `nekobox.exe`:
2. Включите флажок **"Tun Mode"**:

<div align="center">
  <img src="/pics/windows_nekoray/tun_mode.gif" alt="Включение TUN Mode" width="600" style="border-radius: 12px; margin: 1rem 0;" />
</div>


## 🧠 Шаг 3. Настройте обход приложений

1. Откройте вкладку **"Preferences"**
2. Перейдите в раздел **"Routing settings"**
3. Откройте вкладку **"Simple route"**
3. В новом окне справа снизу из выпадающего списка галочку выберите **bypass**

<div align="center">
  <img src="/pics/windows_nekoray/bypass.gif" alt="Настройка обхода" width="600" style="border-radius: 12px; margin: 1rem 0;" />
</div>

## ➕ Шаг 4. Выберите приложения для обхода

1. Откройте менджер задач и найдите там название процесса своего приложения, которое хотите добавить.

<div align="center">
  <img src="/pics/windows_nekoray/task_manager.gif" alt="Менеджер задач" width="600" style="border-radius: 12px; margin: 1rem 0;" />
</div>

2. Откройте меню **Tun settings**
3. Обязательно нажмите галочку **Whitelist mode**
4. Затем впишите название процесса в окно **Proxy process name** и нажмите **Ok**

> 💡 Обычно нужно указать путь к `.exe` или имя процесса.

<div align="center">
  <img src="/pics/windows_nekoray/tun_settings.gif" alt="Настройки туннелирования" width="600" style="border-radius: 12px; margin: 1rem 0;" />
</div>

## ✅ Шаг 5. Скопируйте ссылку подписки

1. В инструкции нажмите **"Скопировать подписку"**:

<div align="center">
  <img src="/pics/windows_nekoray/copy_sub.png" alt="Скопировать подписку" width="400" style="border-radius: 12px; margin: 1rem 0;" />
</div>

## ➕ Шаг 6. Добавьте подписку

1. Правой кнопкой мыши откройте контекстное меню и нажмите **"Add profile from clipboard"**:

<div align="center">
  <img src="/pics/windows_nekoray/add_sub.gif" alt="Добавление подписки" width="600" style="border-radius: 12px; margin: 1rem 0;" />
</div>

2. Вы увидите добавленные ключи.


## ⚙️ Шаг 7. Запустите ВПН

1. Правой кнопкой мыши откройте контекстное меню и нажмите **"Start"**:

<div align="center">
  <img src="/pics/windows_nekoray/start.gif" alt="Запуск Nekoray" width="600" style="border-radius: 12px; margin: 1rem 0;" />
</div>

2. Если появится окно от брандмауэра — нажмите **"Разрешить"**.

## ✅ Готово!

Теперь VPN работает **только в выбранных приложениях**, остальные не используют VPN. Nekoray будет работать в фоновом режиме, пока включён режим Tun.


