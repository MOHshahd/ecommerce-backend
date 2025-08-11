package advancedProjects;

public class Quicksort {
    static int countofquick = 0;
    static int assignoperatorquick = 0;

    private static int partition(int[] arr, int l, int h) {
        int pivot = arr[h]; // last element as pivot
        int i = (l - 1);
        for (int j = l; j < h; j++) {
            if (arr[j] < pivot) {
                i++;
                countofquick++;
                assignoperatorquick++;
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

    public void quickSort(int[] arr, int l, int h) {
        if (l < h) {
            int piv = partition(arr, l, h);
            quickSort(arr, l, piv - 1);
            quickSort(arr, piv + 1, h);
        }
    }
}
