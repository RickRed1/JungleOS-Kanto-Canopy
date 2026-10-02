reg add "HKLM\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-08002be10318}\0007" /v "RadioEnable" /t REG_SZ /d "1" /f
reg add "HKLM\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-08002be10318}\0007" /v "fMinimizePowerConsumption" /t REG_SZ /d "0" /f
powershell -Command "Restart-NetAdapter -Name 'Wi-Fi 2'"
