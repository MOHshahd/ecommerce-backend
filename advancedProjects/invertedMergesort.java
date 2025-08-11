package advancedProjects;

public class invertedMergesort {

    static int Icountofmerge = 0;
    static int Iassignoperatormerge = 0;

    public void invertedmerge(int arr[], int l, int m, int r) {
        int n1 = m - l + 1;
        int n2 = r - m;
        int L[] = new int[n1];
        int R[] = new int[n2];

        for (int i = 0; i < n1; i++) {
            L[i] = arr[l + i];
        }

        for (int j = 0; j < n2; j++) {
            R[j] = arr[m + 1 + j];
        }
        int i, j, k;
        i = 0;
        j = 0;
        k = l;

        while (i < n1 && j < n2) {
            Icountofmerge++;
            if (L[i] >= R[j]) {
                arr[k] = L[i];
                Iassignoperatormerge++;
                i++;
            } else {
                arr[k] = R[j];
                Iassignoperatormerge++;
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

    public void invertedmergeSort(int arr[], int l, int r) {
        if (l < r) {
            int m = (l + r) / 2;
            invertedmergeSort(arr, l, m);
            invertedmergeSort(arr, m + 1, r);

            invertedmerge(arr, l, m, r);
        }
    }
}
