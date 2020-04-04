#include <stdio.h>

struct node
{
    int data;
    
struct node *next;

};

int main()
{
  
  struct node *p,*q;
 
   int n;
 
   scanf("%d", &n);
 
   p = malloc(sizeof(struct node));
 
   scanf("%d", &(p->data));
  
  q=p;
 
   p->next=NULL;
 
   for(int i=1;i<n;i++)
{
   
      p->next = malloc(sizeof(struct node));

         p=p->next;
    
    scanf("%d", &(p->data));
 
       p->next=NULL;

}
    p=q;

while(p->next != NULL)
{
 
  printf("%d\n",p->data);
 
  p=p->next;

}

return 0;
}

 	