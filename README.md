Установка и запуск:
1. Нужно установить необходимые пакеты для Redux Toolkit, если они еще не установлены: `@reduxjs/toolkit` и `react-redux`.
2. Далее нужно создать базовый store с помощью функции `configureStore`.
3. Также с помощью  использования функционала Redux Toolkit, а именно createSlice, создаем слайс, который будет управлять состоянием задач в нашем приложении.

## Контрольные вопросы

1. Что представляет собой `Redux Toolkit` и для чего используется?
2. Что такое стейт-менеджмент во фронтенд-разработке?
3. В каких случаях целесообразно применять стейт-менеджеры, такие как `Redux Toolkit`?

1)Redux Toolkit — это удобный инструментарий для управления состоянием в приложениях React с использованием Redux, облегчающий написание эффективного и лаконичного кода. Он предоставляет средства для упрощения настройки хранилища и работы с асинхронными операциями, сокращая избыточность кода.
2) Стейт менеджер=это инструмент который обеспечивает централизованное хранение, изменение и распределение состояния приложения. Он улучшает масштабируемость, управляемость и отслеживаемость данных в приложении.
3)Используйте Redux Toolkit в случаях, когда ваше приложение становится сложным, требует эффективного управления состоянием, и когда важна поддержка сложной логики взаимодействия между компонентами. Этот инструментарий также целесообразен при необходимости эффективной обработки асинхронных операций и управлении разделяемым состоянием между различными частями приложения.

