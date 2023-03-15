#include <vector>
#include <cstdio>
#include <vector>
#include <algorithm>
#include <ctime>
#include <iostream>

class Solution
{
public:
    static int partition(std::vector<int> &array, int low, int high)
    {
        // partition
        int const pivot = array[high];
        int i = (low - 1);
        for (int j = low; j <= high - 1; j++)
        {
            if (array[j] < pivot)
            {
                i++;
                std::swap(array[j], array[i]);
            }
        }
        std::swap(array[high], array[i + 1]);
        return i + 1;
    }

    void quickSort(std::vector<int> &array, int low, int high)
    {
        if (low < high)
        {
            int const partIndex = partition(array, low, high);
            quickSort(array, low, partIndex - 1);
            quickSort(array, partIndex + 1, high);
        }
    }

    std::vector<int> sortArray(std::vector<int> &nums)
    {
        quickSort(nums, 0, nums.size() - 1);

        return nums;
    }
};


template <typename T>
std::ostream &operator<<(
    std::ostream &outputStream,
    const std::vector<T> &vectorObj)
{
    // Print all the elements of vector using loop
    for (auto elem : vectorObj)
    {
        outputStream << elem << " ";
    }
    return outputStream;
};


int main(int argc, char const *argv[])
{
    /* code */
        std::srand(unsigned(std::time(nullptr)));
    std::vector<int> v(50000);
    std::generate(v.begin(), v.end(), std::rand);

    std::cout << v << std::endl;

    Solution solution;

    solution.sortArray(v);

    std::cout << v << std::endl;
    return 0;
}
