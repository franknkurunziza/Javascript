function fibo(n){
    if (n<=1){
        return n;
    }
    return fibo(n-1)+fibo(n-2)
}
let m=fibo(5);
console.log(m);

function fibos(n){
    let f=[];
    f[0]=0;
    f[1]=1;
    for(let i=2;i<=n;i++){
        f[i]=f[i-2]+f[i-1]
    }
    return f[n];
}
console.log(fibos(0));

