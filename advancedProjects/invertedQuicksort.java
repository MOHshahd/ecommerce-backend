package advancedProjects;

public class invertedQuicksort {
    static int Icountofquick = 0;
    static int Iassignoperatorquick = 0;

    public int invertedpartition(int[] arr, int l, int h) {
        int pivot = arr[h];
        int i = (l - 1);
        for (int j = l; j < h; j++) {
            if (arr[j] > pivot) {
                i++;
                Icountofquick++;
                Iassignoperatorquick++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        int temp = arr[i + 1];
        arr[i + 1] = arr[h];
        arr[h] = temp;
        return i + 1;
    }

    public void invertedquickSort(int[] arr, int l, int h) {
        if (l < h) {
            int piv = invertedpartition(arr, l, h);
            invertedquickSort(arr, l, piv - 1);
            invertedquickSort(arr, piv + 1, h);
        }
    }
}
