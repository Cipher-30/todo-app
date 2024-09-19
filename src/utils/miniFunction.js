  //TO GET THE CURRENT DATE AND TIME
  export const currentDate = () => {
     const currDate = new Date();
     const date = currDate.toLocaleDateString();
     const time = currDate.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit' });

     const dateArr = `${time} `;

   
     return dateArr;
     
};



  //TO GET THE DATE IN CORRECT FORMAT 
 export const dateFormatConverter = (data,i) =>
{
    const longDate  = new Date(data);

    const date = longDate.toLocaleDateString();
    const time = longDate.toLocaleTimeString();


    if(i===1)
    {
    return date;
    }
    else return time;
  
}


  //TO GET THE DIFFERENCE IN DATE AND TIME
export const dateDiff = (futureDate) =>
{
    const currDate = new Date();
    const futureDate2 = new Date(futureDate);

    const diffMilliSec = futureDate2 - currDate;

    const dayLeft =Math.ceil( diffMilliSec/(24*60*60*1000));
    
    return dayLeft;


}















