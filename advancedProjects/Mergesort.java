package advancedProjects;

public class Mergesort {
    static int countofmerge = 0;
    static int assignoperatormerge = 0;

    public void merge(int arr[], int l, int m, int r) {
        int n1 = m - l + 1;
        int n2 = r - m;
        int L[] = new int[n1];//1
        int R[] = new int[n2];//1

        for (int i = 0; i < n1; i++)
            L[i] = arr[l + i];

        for (int j = 0; j < n2; j++)
            R[j] = arr[m + 1 + j];
        int i, j, k;
        i = 0;
        j = 0;
        k = l;//0

        while (i < n1 && j < n2) {
            countofmerge++;
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                assignoperatormerge++;
                i++;
            } 
            else {
                arr[k] = R[j];
                assignoperatormerge++;
                j++; 
            }
            k++;
        }

        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }

    public void mergeSort(int arr[], int l, int r) {
        if (l < r) {
            int m = (l + r) / 2;
            mergeSort(arr, l, m);
            mergeSort(arr, m + 1, r);

            merge(arr, l, m, r);
        }
    }
}
