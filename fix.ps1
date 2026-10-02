$path = (Get-ChildItem 'HKLM:\SYSTEM\CurrentControlSet\Control\Class\{4d36e972-e325-11ce-bfc1-08002be10318}' | Where-Object { $_.GetValue('DriverDesc') -like '*Atheros*' }).PSPath
if ($path) {
    Set-ItemProperty -Path $path -Name 'RadioEnable' -Value '1'
    Set-ItemProperty -Path $path -Name 'fMinimizePowerConsumption' -Value '0'
    Restart-NetAdapter -Name 'Wi-Fi 2'
    Write-Host 'Success: Radio enabled and adapter restarted!' -ForegroundColor Green
} else {
    Write-Host 'Adapter registry path not found.' -ForegroundColor Red
}
