#include<stdio.h>
int stack[5],top=-1;
void pop(){
    if(top>-1){
        top--;
        printf("\nexpression is  valid");
    }
    else if(top==-1){
        printf("\nexpression is invalid");
        
        

    
    }    
      
}
void push(){
    top++;
    stack[top]=1;
    
    
}
void main(){
    printf("\nenter the expression ");
    char exp[5];
    scanf("%s",exp);
    int i=0;
    while(exp[i]!='\0'){
        if(exp[i]=='('){
            push();
        }
        if(exp[i]==')'){
            pop();
        }
        i++;
    }
    
    if(top!=-1){
        printf("\nexpression is invalid");

    }