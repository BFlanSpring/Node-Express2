function timeToWords(time) {
    const hours = [
      'midnight', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'noon'
    ];
    
    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty'];
    const ones = [
      '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
      'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
      'eighteen', 'nineteen'
    ];
  
    const [hourStr, minuteStr] = time.split(':');
    const hour = parseInt(hourStr);
    const minute = parseInt(minuteStr);
  
    let output = '';
  
    if (hour === 0 && minute === 0) {
      output = hours[0];
    } else if (hour === 12 && minute === 0) {
      output = hours[12];
    } else {
      if (hour >= 12) {
        output += 'pm';
        if (hour > 12) {
          output = hours[hour - 12];
        }
      } else {
        output += 'am';
        if (hour === 0) {
          output = hours[12];
        } else {
          output = hours[hour];
        }
      }
  
      if (minute === 0) {
        output += ` ${output === 'noon' || output === 'midnight' ? '' : 'o’clock'}`;
      } else if (minute < 10) {
        output += ` oh ${ones[minute]}`;
      } else if (minute < 20) {
        output += ` ${ones[minute]}`;
      } else {
        const minuteTens = Math.floor(minute / 10);
        const minuteOnes = minute % 10;
        output += ` ${tens[minuteTens]}`;
        if (minuteOnes !== 0) {
          output += ` ${ones[minuteOnes]}`;
        }
      }
  
      if (hour >= 12) {
        output += ' pm';
      } else {
        output += ' am';
      }
    }
  
    return output.trim();
  }
  
  module.exports = {
    timeToWords,
  };
  
  
  