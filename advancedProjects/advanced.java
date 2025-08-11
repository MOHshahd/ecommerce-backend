package advancedProjects;

import java.util.Arrays;
import java.util.Scanner;

public class advanced {
     public static void main(String[] args) {
          System.out.print("Enter the size of the array: ");
          Scanner s = new Scanner(System.in);
          String size = s.nextLine();
          int Isize=0;
          try {
              Isize = Integer.parseInt(size);

              if (!size.equals(String.valueOf(Isize))) {
                  System.out.println("Please enter a valid number!");
              } 
          } 
          catch (NumberFormatException e) {
              System.out.println("Please enter a valid number!");
              System.exit(-1);
          }
          int[] printedarr= scanArray(Isize); 
          System.out.println(Arrays.toString(printedarr));
          menu(printedarr);
     }
     
     static void menu(int[] arr) {
         Mergesort merge = new Mergesort();
         Quicksort quick = new Quicksort();
         invertedMergesort Imerge = new invertedMergesort();
         invertedQuicksort Iquick = new invertedQuicksort();
          Scanner s = new Scanner(System.in);             
             stop:for(;;) {
                 System.out.println("please choose which operation: ");
                 System.out.println("1. Sorted List.");
                 System.out.println("2. Inversely Sorted List");
                 String choice1 = s.next();
                 int Ichoice1=0;
                 try {
                      Ichoice1 = Integer.parseInt(choice1);

                        if (!choice1.equals(String.valueOf(Ichoice1))) {
                            System.out.println("Please enter a valid number!");
                        } 
                    } 
                  catch (NumberFormatException e) {
                        System.out.println("Please enter a valid number!");
                        System.exit(-1);
                    }
                 char choice2;
                 if(Ichoice1 == 1) {
                     System.out.println("A. Merge Sort");
                     System.out.println("B. Quick Sort");
                     System.out.println("C. All of the above");
                     System.out.println("D. exit");
                     choice2 = s.next().charAt(0);
                     choice2=Character.toLowerCase(choice2);
             switch(choice2) {
             case 'a': {
                merge.mergeSort(arr, 0, arr.length -1);
                System.out.println(Arrays.toString(arr));
                break;
             }
             case 'b' : {
                 quick.quickSort(arr, 0, arr.length -1);
                 System.out.println(Arrays.toString(arr));
                 break;
             }
             case 'c' :{
                 merge.mergeSort(arr, 0, arr.length -1);
                 System.out.println("assign operator for merge sort: "+Mergesort.assignoperatormerge);
                 System.out.println("Merge Sort: ");
                System.out.println(Arrays.toString(arr));

                
                 quick.quickSort(arr, 0, arr.length -1);
                 System.out.println("assign operator for quick sort: "+Quicksort.assignoperatorquick);
                 System.out.println("Quick Sort: ");
                 System.out.println(Arrays.toString(arr));
                 
                 if(Quicksort.countofquick <= Mergesort.countofmerge) {
                     System.out.println("Quick sort comparison: "+Quicksort.countofquick);
                     System.out.println(" Merge sort comparison: "+Mergesort.countofmerge);
                     System.out.println("So the Quick sort is better ... ");

                 }
                 
                 else {
                     System.out.println("Quick sort comparison: "+Quicksort.countofquick);
                     System.out.println(" Merge sort comparison: "+Mergesort.countofmerge);
                     System.out.println("So the Merge sort is better ... ");

                 }
                 break;
             }
             case 'd' : {
                 System.out.println("End");
                 break stop;
             }
             default : {
                 System.out.println("Please enter a valid input!");
                 break;
             }
             }
                 }
                 else if (Ichoice1== 2) {
                 System.out.println("A. Merge Sort");
                 System.out.println("B. Quick Sort");
                 System.out.println("C. All of the above");
                 System.out.println("D. exit");
                 choice2 = s.next().charAt(0);
                 choice2=Character.toLowerCase(choice2);
         switch(choice2) {
         case 'a': {
            Imerge.invertedmergeSort(arr, 0, arr.length -1);
            System.out.println(Arrays.toString(arr));
            break;
         }
         case 'b' : {
             Iquick.invertedquickSort(arr, 0, arr.length -1);
             System.out.println(Arrays.toString(arr));
             break;
         }
         case 'c' :{
             Imerge.invertedmergeSort(arr, 0, arr.length -1);
             System.out.println("assign operator for inverted merge sort: "+invertedMergesort.Iassignoperatormerge);
             System.out.println(" Inverted Merge Sort: ");
            System.out.println(Arrays.toString(arr));

            
             Iquick.invertedquickSort(arr, 0, arr.length -1);
             System.out.println("assign operator for inverted quick sort: "+invertedQuicksort.Iassignoperatorquick);
             System.out.println(" Inverted Quick Sort: ");
             System.out.println(Arrays.toString(arr));
             
             if(invertedQuicksort.Icountofquick > invertedMergesort.Icountofmerge) {
                 System.out.println("Quick sort inverted comparison: "+invertedQuicksort.Icountofquick);
                 System.out.println(" Merge sort inverted comparison: "+invertedMergesort.Icountofmerge);
                 System.out.println("So the Merge sort is better ... ");

             }
             
             else {
                 System.out.println("Quick sort inverted comparison: "+invertedQuicksort.Icountofquick);
                 System.out.println(" Merge sort inverted comparison: "+invertedMergesort.Icountofmerge);
                 System.out.println("So the Quick sort is better ... ");

             }
             
             break;
         }
         case 'd' : {
             System.out.println("End");
             break stop;
         }
         default : {
             System.out.println("Please enter a valid input!");
             break;
         }
             }
             }
                 else {
                     System.out.println("Please enter a valid input!");
                 }
                 
                 Quicksort.countofquick=0;
                 invertedQuicksort.Icountofquick=0;
                 invertedMergesort.Icountofmerge=0;
                 Mergesort.countofmerge=0;
             }
     }
     
     static int[] scanArray(int x) {
         System.out.println("please enter your array: ");
          String arr[] = new String[x];
          int Iarr[]=new int[x];
          Scanner s = new Scanner(System.in);

          for (int i=0; i<x ;i++) {
              arr[i]= s.nextLine();
              try {
                  Iarr[i] = Integer.parseInt(arr[i]);

                    if (!arr[i].equals(String.valueOf(Iarr[i]))) {
                        System.out.println("Please enter a valid number!");
                    } 
                } 
              catch (NumberFormatException e) {
                    System.out.println("Please enter a valid number!");
                    System.exit(-1);
                }
              
          }
          return Iarr;
     }        
}
