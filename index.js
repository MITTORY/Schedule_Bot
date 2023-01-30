const TelegramApi = require ('node-telegram-bot-api')

const token ='5841472247:AAHpkPj-qN_iI6v_Uptoh7WfJhvcYGr8L-g'

const bot = new TelegramApi(token, {polling: true})

bot.on("message",  async msg=>
{
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === '/start')
    {
       return  bot.sendMessage(chatId, 'Приветствую тебя! \nЭтот бот содержит информацию о расписании звонков и пар проходящих у Беллы и Айдара. \nЧтобы воспользоваться, укажите в сообщении: \n{Имя} {День недели}\nНапример: Белла понедельник');
    }

    if (text === 'Белла понедельник')
    {
        return  bot.sendMessage(chatId,'')
    }

    if (text === 'Белла вторник')
    {
        return  bot.sendMessage(chatId,'')
    }

    if (text === 'Белла среда')
    {
        return  bot.sendMessage(chatId,'')
    }

    if (text === 'Белла четверг')
    {
        return  bot.sendMessage(chatId,'')
    }

    if (text === 'Белла пятница')
    {
        return  bot.sendMessage(chatId,'')
    }

    if (text === 'Белла суббота')
    {
        return  bot.sendMessage(chatId,'')
    }

    if (text === 'Белла воскресенье')
    {
        return  bot.sendMessage(chatId,'Размечталась! Вали спать!!!')
    }

    if (text === 'Айдар понедельник')
    {
        return  bot.sendMessage(chatId,'')
    }

    if (text === 'Айдар вторник')
    {
        return  bot.sendMessage(chatId,'')
    }

    if (text === 'Айдар среда')
    {
        return  bot.sendMessage(chatId,'')
    }

    if (text === 'Айдар четверг')
    {
        return  bot.sendMessage(chatId,'')
    }

    if (text === 'Айдар пятница')
    {
        return  bot.sendMessage(chatId,'')
    }

    if (text === 'Айдар суббота')
    {
        return  bot.sendMessage(chatId,'')
    }

    if (text === 'Айдар воскресенье')
    {
        return  bot.sendMessage(chatId,'Умница, что рвёшься к знаниям! Но сегодня у тебя нет пар)\nОтдыхай <3')
    }
    return bot.sendMessage(chatId,'Я тебя не понимаю!\nПопробуй действовать по условию!)')
})