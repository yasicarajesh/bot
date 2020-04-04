#include<stdio.h>
struct node {
    struct node *next; 
};

struct node* traverseLastNode(struct node *traverseNode) {
    while(traverseNode->next != NULL) {
        traverseNode = traverseNode -> next;
    }
    return traverseNode;
}

void printNodes(struct node *p) {
    while(p != NULL) {
        printf("%d\n", p->data);
        p=p->next;
    }
}

struct node* createNode(int data) {
    struct node *temp;
    temp = malloc(sizeof(struct node));
    temp->data = data;
    temp->next = NULL;
    return temp;
}

struct node* traverse(struct node *traverseNode, int pos) {
    for(int i=0; i<pos; i++) {
        traverseNode = traverseNode -> next;
    }
    return traverseNode;
}

int main() {
    struct node *p, *q, *pnode, *pnode1, *pnode2, *pnode3;
    int n, pos;
    int n, pos, value;
    scanf("%d", &n);
    p = malloc(sizeof(struct node));
    scanf("%d",&(p->data));

    //Creating first node outside the loop.
    scanf("%d", &value);
    p = createNode(value);

    //Assigning first node to q so the after p moves to the last node while creation, q will be the starting node.
    q=p;
    p->next=NULL;

    //Creating remaining nodes
    for(int i=1;i<n;i++) {
       p->next = malloc(sizeof(struct node));
       scanf("%d", &value);
       p->next = createNode(value);
       p=p->next;
       scanf("%d", &(p->data));
       p->next = NULL; 
    }
    p = q;

while(p->next != NULL) {
    printf("%d\n", p->data);
    p = p->next;
}
    p = q;
    p = traverseLastNode(p);

//Insertion at begining
pnode = malloc(sizeof(struct node));
pnode->data = 60;
pnode->next = NULL;
    //Insertion at begining
    pnode = createNode(60);

pnode->next = q;
q = pnode;
    pnode->next = q;
    q = pnode;

//Insertion at end
pnode1 = malloc(sizeof(struct node));
pnode1->data = 70;
pnode1->next = NULL;
    //Insertion at end
    pnode1 = createNode(70);

p->next = pnode1;
    p->next = pnode1;

//Insertion at given position
pnode2 = malloc(sizeof(struct node));
pnode2->data = 80;
pnode2->next = NULL;
    //Insertion at given position
    pnode2 = createNode(80);
    pnode3 = createNode(90);

pnode3 = malloc(sizeof(struct node));
pnode3->data = 90;
pnode3->next = NULL;
    scanf("%d", &pos);

scanf("%d", &pos);
    p=q;
    p = traverse(p, pos);

p=q;
for(int i=0; i<pos-1; i++) {
    p = p->next;
}
pnode2->next = pnode3;
pnode3->next = p->next;
p->next = pnode2;

p=q;
printf("\nAfter Inserting\n");
while(p != NULL) {
    printf("%d\n", p->data);
    p = p->next;
}
    pnode2->next = pnode3;
    pnode3->next = p->next;
    p->next = pnode2;

    p=q;
    printf("\nAfter Inserting\n");
    printNodes(p);
    return 0;
}