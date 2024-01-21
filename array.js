// let arr = [1,2,3,4,5];
// console.log(arr);
// for(let i=0; i<arr.length; i++)
// {
//     console.log(arr[i]);
// }

// let arr = [1,2,3,4,5];
// console.log(arr);
// for(let i=0; i<arr.length; i++)
// {
//     arr[i] = arr[i] + 5;
//     console.log(arr[i]);
// }


// let arr = [1,2,3,4,5];
// console.log(arr);
// for(let i=0; i<arr.length; i++)
// {
//     arr[i] = arr[i] + "akshay"
//     // arr[i] = arr[i] + 5;
//     console.log(arr[i]);
// }

// // arrange the element into assending order
// //let arr = [5,8,2,4,9,3,5,1,9,3,6,7,1,2,1,3,3];
// // let arr = [45,12,97,34,67,29,05,74,38,55];
// let arr = ["f","E","a","n","b","R","o","Z"];
// console.log(arr);
// for(let j = 0;j<arr.length; j++)
// {
//     for(let i=0; i<arr.length; i++)
//     {
//         // console.log(arr[i],arr[i+1])
//         if(arr[i]>arr[i+1])
//         {
//             let b = 0;
//             b = arr[i];
//             // console.log("b",b,"arr[i[",arr[i]);
//             arr[i] = arr[i+1];
//             // console.log("arr[i]",b,"arr[i+1",arr[i])
//             arr[i+1] = b;
//             // console.log("arr[i+1]",arr[i], "b",b)
//         }
//     }    
// }
//     console.log("assending order array is",arr);

// // To find how many times element repet
// let arr = [1,2,1,3,3];
let arr = [5,8,2,4,9,3,5,1,9,3,6,7,1,2,1,3,3];
// let arr = [45,12,97,34,67,29,05,74,38,55];
// let arr = ["f","E","a","n","b","R","o","Z"];

console.log(arr);
for(let j = 0;j<arr.length; j++)    //First arrange the array into assending order then count the no. of element
{
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]>arr[i+1])
            {
                let b = 0;
                b = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = b;
            }    
    }
    console.log("assending order array is",arr);
    var i=0,count1=0;
    for( ;i<arr.length;i++)
    {
        let count = 0;
        for(let j=i; j<arr.length; j++)
        {
            if(arr[i] === arr[j])
            {
            count = count+1;
            // console.log(arr[i],arr[j],"count is",count);
            i=j;
            count1 = count1 + count;
            }
        }  
        console.log("Element",arr[i],"repets",count,"times");
    }
    if(arr.length==count1)
    {
        console.log("NO ELEMENT REPET");
    }
    else{
        console.log("ELEMENT REPET");
    }
}