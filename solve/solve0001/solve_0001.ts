/**
 * @index 1
 * @title 两数之和
 * @difficulty 简单
 * @tags array,hash-table
 * @draft false
 * @link https://leetcode-cn.com/problems/two-sum/
 * @frontendId 1
 */

export function twoSum(nums: number[], target: number): number[] {
  const mp = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    if (mp.has(target - nums[i])) {
      return [mp.get(target - nums[i]), i]
    }
    mp.set(nums[i], i)
  }

  return []
}
