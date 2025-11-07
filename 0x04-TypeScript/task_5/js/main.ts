/**
 * TASK 5: Credits System with Branded Types
 * 
 * This file demonstrates branded types in TypeScript for distinguishing
 * between different kinds of credits (Major vs Minor)
 */

// ==================== INTERFACE DEFINITIONS ====================

/**
 * MajorCredits: Interface for major course credits
 * 
 * Features:
 * - credits: number of credits earned
 * - brand: unique brand property to distinguish from MinorCredits
 * - Prevents accidental mixing of major and minor credits
 */
interface MajorCredits {
  credits: number;
  _brand: 'major';  // Brand property for type distinction
}

/**
 * MinorCredits: Interface for minor course credits
 * 
 * Features:
 * - credits: number of credits earned  
 * - brand: unique brand property to distinguish from MajorCredits
 * - Ensures type safety when handling different credit types
 */
interface MinorCredits {
  credits: number;
  _brand: 'minor';  // Brand property for type distinction
}

// ==================== CREDIT SUM FUNCTIONS ====================

/**
 * sumMajorCredits: Sums credits for major subjects
 * 
 * Type Safety:
 * - Accepts two MajorCredits objects
 * - Returns a new MajorCredits object with summed credits
 * - Maintains the major brand throughout
 * 
 * @param subject1 - First major subject with credits
 * @param subject2 - Second major subject with credits
 * @returns MajorCredits object with summed credits
 */
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: 'major'
  };
}

/**
 * sumMinorCredits: Sums credits for minor subjects
 * 
 * Type Safety:
 * - Accepts two MinorCredits objects
 * - Returns a new MinorCredits object with summed credits
 * - Maintains the minor brand throughout
 * 
 * @param subject1 - First minor subject with credits
 * @param subject2 - Second minor subject with credits
 * @returns MinorCredits object with summed credits
 */
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: 'minor'
  };
}

// ==================== TESTING AND DEMONSTRATION ====================

/**
 * Test the credit sum functions with example data
 */
function testCreditFunctions(): void {
  // Create test major credits
  const major1: MajorCredits = { credits: 3, _brand: 'major' };
  const major2: MajorCredits = { credits: 4, _brand: 'major' };
  
  // Create test minor credits  
  const minor1: MinorCredits = { credits: 2, _brand: 'minor' };
  const minor2: MinorCredits = { credits: 1, _brand: 'minor' };
  
  // Test major credit summation
  const totalMajor = sumMajorCredits(major1, major2);
  console.log('Major Credits Sum:', totalMajor.credits); // Expected: 7
  
  // Test minor credit summation
  const totalMinor = sumMinorCredits(minor1, minor2);
  console.log('Minor Credits Sum:', totalMinor.credits); // Expected: 3
  
  // Demonstrate type safety - this would cause a TypeScript error:
  // const invalidSum = sumMajorCredits(major1, minor1); // Error: types don't match
}

// Run tests when script loads
testCreditFunctions();