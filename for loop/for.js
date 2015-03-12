var days = ['maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag', 'zondag'];
for (var counter = 0; counter < days.length; counter++)
{
    document.write(days[counter]);
    if (counter < days.length - 1) 
    {
        document.write(', ');
    }
}

