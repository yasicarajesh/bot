#include<stdio.h>
#include<stdlib.h>
struct node
{
int data;
struct node *next;
};
int main()
{
  struct *p,*q;
  int n;
  scanf("%d",&n);
  p=malloc(sizeof(struct node));
  scanf("%d",&(p->data));
  p=q;
  p->next=NULL;
}
 while(p->next!=NULL)
{ 
   printf("%d\n",p->data);
   p=p->next;
}
return 0;

