import _extends from "@babel/runtime/helpers/extends";
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */
import { config } from './configReadonly.js';
import { createNode, createObjectNode, createOperatorNode, createParenthesisNode, createRelationalNode, createArrayNode, createBlockNode, createConditionalNode, createConstantNode, createRangeNode, createReviver, createChainClass, createFunctionAssignmentNode, createChain, createAccessorNode, createIndexNode, createAssignmentNode, createSymbolNode, createFunctionNode, createParse, createResolve, createSimplifyConstant, createCompile, createEvaluate, createHelpClass, createParserClass, createSimplifyCore, createHelp, createSimplify, createSymbolicEqual, createDerivative, createParser, createLeafCount, createRationalize, createFilterTransform, createForEachTransform, createMapTransform, createApplyTransform, createSubsetTransform, createConcatTransform, createMaxTransform, createSumTransform, createMinTransform, createCumSumTransform, createDiffTransform, createIndexTransform, createRangeTransform, createRowTransform, createColumnTransform, createMeanTransform, createVarianceTransform, createStdTransform } from '../factoriesAny.js';
import { BigNumber, Complex, e, _false, fineStructure, Fraction, i, _Infinity, LN10, LOG10E, Matrix, _NaN, _null, phi, Range, ResultSet, SQRT1_2,
// eslint-disable-line camelcase
sackurTetrode, tau, _true, version, DenseMatrix, efimovFactor, LN2, pi, replacer, SQRT2, typed, unaryPlus, weakMixingAngle, abs, acos, acot, acsc, addScalar, arg, asech, asinh, atan, atanh, bignumber, bitNot, boolean, clone, combinations, complex, conj, cosh, coth, csc, cube, equalScalar, erf, exp, expm1, filter, forEach, format, getMatrixDataType, hex, im, isInteger, isNegative, isPositive, isZero, LOG2E, lgamma, log10, log2, map, multiplyScalar, not, number, oct, pickRandom, print, random, re, sec, sign, sin, SparseMatrix, splitUnit, square, string, tan, typeOf, acosh, acsch, apply, asec, bin, combinationsWithRep, cos, csch, isNaN, isPrime, randomInt, sech, sinh, sparse, sqrt, tanh, unaryMinus, acoth, cot, fraction, isNumeric, matrix, matrixFromFunction, mode, numeric, prod, reshape, size, squeeze, subset, transpose, xgcd, zeros, asin, cbrt, concat, count, ctranspose, diag, divideScalar, dotDivide, equal, flatten, gcd, hasNumericValue, identity, kron, largerEq, leftShift, matrixFromColumns, mod, nthRoot, ones, resize, rightArithShift, round, smaller, to, unequal, xor, add, bitAnd, bitXor, catalan, compare, compareText, cumsum, deepEqual, dot, equalText, floor, hypot, ImmutableDenseMatrix, Index, invmod, larger, log, matrixFromRows, min, multiply, nthRoots, or, partitionSelect, quantileSeq, rightLogShift, smallerEq, subtract, trace, usolve, and, bitOr, ceil, compareNatural, composition, cross, det, diff, distance, dotMultiply, FibonacciHeap, fix, index, intersect, lcm, log1p, lsolve, max, qr, range, row, setCartesian, setDistinct, setIsSubset, setPowerset, slu, Spa, sum, usolveAll, atan2, column, lsolveAll, setDifference, setMultiplicity, setSymDifference, sort, inv, lup, pinv, pow, setIntersect, setUnion, sqrtm, Unit, vacuumImpedance, wienDisplacement, atomicMass, bohrMagneton, boltzmann, conductanceQuantum, createUnit, deuteronMass, dotPow, electricConstant, elementaryCharge, expm, faraday, fft, gamma, gravitationConstant, hartreeEnergy, ifft, klitzing, loschmidt, magneticConstant, molarMass, molarPlanckConstant, neutronMass, nuclearMagneton, planckCharge, planckLength, planckTemperature, protonMass, reducedPlanckConstant, rydberg, secondRadiation, speedOfLight, stefanBoltzmann, thomsonCrossSection, avogadro, bohrRadius, coulomb, divide, electronMass, factorial, firstRadiation, gasConstant, inverseConductanceQuantum, lusolve, magneticFluxQuantum, molarMassC12, multinomial, permutations, planckMass, polynomialRoot, setSize, stirlingS2, unit, bellNumbers, eigs, fermiCoupling, gravity, kldivergence, mean, molarVolume, planckConstant, quantumOfCirculation, variance, classicalElectronRadius, median, planckTime, std, mad, norm, rotationMatrix, rotate, schur, sylvester, lyap } from './pureFunctionsAny.generated.js';
var math = {}; // NOT pure!
var mathWithTransform = {}; // NOT pure!
var classes = {}; // NOT pure!

export var Node = createNode({
  mathWithTransform
});
export var ObjectNode = createObjectNode({
  Node
});
export var OperatorNode = createOperatorNode({
  Node
});
export var ParenthesisNode = createParenthesisNode({
  Node
});
export var RelationalNode = createRelationalNode({
  Node
});
export var ArrayNode = createArrayNode({
  Node
});
export var BlockNode = createBlockNode({
  Node,
  ResultSet
});
export var ConditionalNode = createConditionalNode({
  Node
});
export var ConstantNode = createConstantNode({
  Node
});
export var RangeNode = createRangeNode({
  Node
});
export var reviver = createReviver({
  classes
});
export var Chain = createChainClass({
  math,
  typed
});
export var FunctionAssignmentNode = createFunctionAssignmentNode({
  Node,
  typed
});
export var chain = createChain({
  Chain,
  typed
});
export var AccessorNode = createAccessorNode({
  Node,
  subset
});
export var IndexNode = createIndexNode({
  Node,
  size
});
export var AssignmentNode = createAssignmentNode({
  matrix,
  Node,
  subset
});
export var SymbolNode = createSymbolNode({
  Unit,
  Node,
  math
});
export var FunctionNode = createFunctionNode({
  Node,
  SymbolNode,
  math
});
export var parse = createParse({
  AccessorNode,
  ArrayNode,
  AssignmentNode,
  BlockNode,
  ConditionalNode,
  ConstantNode,
  FunctionAssignmentNode,
  FunctionNode,
  IndexNode,
  ObjectNode,
  OperatorNode,
  ParenthesisNode,
  RangeNode,
  RelationalNode,
  SymbolNode,
  config,
  numeric,
  typed
});
export var resolve = createResolve({
  ConstantNode,
  FunctionNode,
  OperatorNode,
  ParenthesisNode,
  parse,
  typed
});
export var simplifyConstant = createSimplifyConstant({
  bignumber,
  fraction,
  AccessorNode,
  ArrayNode,
  ConstantNode,
  FunctionNode,
  IndexNode,
  ObjectNode,
  OperatorNode,
  SymbolNode,
  config,
  mathWithTransform,
  matrix,
  typed
});
export var compile = createCompile({
  parse,
  typed
});
export var evaluate = createEvaluate({
  parse,
  typed
});
export var Help = createHelpClass({
  parse
});
export var Parser = createParserClass({
  evaluate
});
export var simplifyCore = createSimplifyCore({
  AccessorNode,
  ArrayNode,
  ConstantNode,
  FunctionNode,
  IndexNode,
  ObjectNode,
  OperatorNode,
  ParenthesisNode,
  SymbolNode,
  add,
  divide,
  equal,
  isZero,
  multiply,
  parse,
  pow,
  subtract,
  typed
});
export var help = createHelp({
  Help,
  mathWithTransform,
  typed
});
export var simplify = createSimplify({
  bignumber,
  fraction,
  AccessorNode,
  ArrayNode,
  ConstantNode,
  FunctionNode,
  IndexNode,
  ObjectNode,
  OperatorNode,
  ParenthesisNode,
  SymbolNode,
  add,
  config,
  divide,
  equal,
  isZero,
  mathWithTransform,
  matrix,
  multiply,
  parse,
  pow,
  resolve,
  simplifyConstant,
  simplifyCore,
  subtract,
  typed
});
export var symbolicEqual = createSymbolicEqual({
  OperatorNode,
  parse,
  simplify,
  typed
});
export var derivative = createDerivative({
  ConstantNode,
  FunctionNode,
  OperatorNode,
  ParenthesisNode,
  SymbolNode,
  config,
  equal,
  isZero,
  numeric,
  parse,
  simplify,
  typed
});
export var parser = createParser({
  Parser,
  typed
});
export var leafCount = createLeafCount({
  parse,
  typed
});
export var rationalize = createRationalize({
  bignumber,
  fraction,
  AccessorNode,
  ArrayNode,
  ConstantNode,
  FunctionNode,
  IndexNode,
  ObjectNode,
  OperatorNode,
  ParenthesisNode,
  SymbolNode,
  add,
  config,
  divide,
  equal,
  isZero,
  mathWithTransform,
  matrix,
  multiply,
  parse,
  pow,
  simplify,
  simplifyConstant,
  simplifyCore,
  subtract,
  typed
});
_extends(math, {
  e,
  false: _false,
  fineStructure,
  i,
  Infinity: _Infinity,
  LN10,
  LOG10E,
  NaN: _NaN,
  null: _null,
  phi,
  SQRT1_2,
  sackurTetrode,
  tau,
  true: _true,
  'E': e,
  version,
  efimovFactor,
  LN2,
  pi,
  replacer,
  reviver,
  SQRT2,
  typed,
  unaryPlus,
  'PI': pi,
  weakMixingAngle,
  abs,
  acos,
  acot,
  acsc,
  addScalar,
  arg,
  asech,
  asinh,
  atan,
  atanh,
  bignumber,
  bitNot,
  boolean,
  clone,
  combinations,
  complex,
  conj,
  cosh,
  coth,
  csc,
  cube,
  equalScalar,
  erf,
  exp,
  expm1,
  filter,
  forEach,
  format,
  getMatrixDataType,
  hex,
  im,
  isInteger,
  isNegative,
  isPositive,
  isZero,
  LOG2E,
  lgamma,
  log10,
  log2,
  map,
  multiplyScalar,
  not,
  number,
  oct,
  pickRandom,
  print,
  random,
  re,
  sec,
  sign,
  sin,
  splitUnit,
  square,
  string,
  tan,
  typeOf,
  acosh,
  acsch,
  apply,
  asec,
  bin,
  chain,
  combinationsWithRep,
  cos,
  csch,
  isNaN,
  isPrime,
  randomInt,
  sech,
  sinh,
  sparse,
  sqrt,
  tanh,
  unaryMinus,
  acoth,
  cot,
  fraction,
  isNumeric,
  matrix,
  matrixFromFunction,
  mode,
  numeric,
  prod,
  reshape,
  size,
  squeeze,
  subset,
  transpose,
  xgcd,
  zeros,
  asin,
  cbrt,
  concat,
  count,
  ctranspose,
  diag,
  divideScalar,
  dotDivide,
  equal,
  flatten,
  gcd,
  hasNumericValue,
  identity,
  kron,
  largerEq,
  leftShift,
  matrixFromColumns,
  mod,
  nthRoot,
  ones,
  resize,
  rightArithShift,
  round,
  smaller,
  to,
  unequal,
  xor,
  add,
  bitAnd,
  bitXor,
  catalan,
  compare,
  compareText,
  cumsum,
  deepEqual,
  dot,
  equalText,
  floor,
  hypot,
  invmod,
  larger,
  log,
  matrixFromRows,
  min,
  multiply,
  nthRoots,
  or,
  partitionSelect,
  quantileSeq,
  rightLogShift,
  smallerEq,
  subtract,
  trace,
  usolve,
  and,
  bitOr,
  ceil,
  compareNatural,
  composition,
  cross,
  det,
  diff,
  distance,
  dotMultiply,
  fix,
  index,
  intersect,
  lcm,
  log1p,
  lsolve,
  max,
  qr,
  range,
  row,
  setCartesian,
  setDistinct,
  setIsSubset,
  setPowerset,
  slu,
  sum,
  usolveAll,
  atan2,
  column,
  lsolveAll,
  setDifference,
  setMultiplicity,
  setSymDifference,
  sort,
  inv,
  lup,
  pinv,
  pow,
  setIntersect,
  setUnion,
  sqrtm,
  vacuumImpedance,
  wienDisplacement,
  atomicMass,
  bohrMagneton,
  boltzmann,
  conductanceQuantum,
  createUnit,
  deuteronMass,
  dotPow,
  electricConstant,
  elementaryCharge,
  expm,
  faraday,
  fft,
  gamma,
  gravitationConstant,
  hartreeEnergy,
  ifft,
  klitzing,
  loschmidt,
  magneticConstant,
  molarMass,
  molarPlanckConstant,
  neutronMass,
  nuclearMagneton,
  planckCharge,
  planckLength,
  planckTemperature,
  protonMass,
  reducedPlanckConstant,
  rydberg,
  secondRadiation,
  speedOfLight,
  stefanBoltzmann,
  thomsonCrossSection,
  avogadro,
  bohrRadius,
  coulomb,
  divide,
  electronMass,
  factorial,
  firstRadiation,
  gasConstant,
  inverseConductanceQuantum,
  lusolve,
  magneticFluxQuantum,
  molarMassC12,
  multinomial,
  permutations,
  planckMass,
  polynomialRoot,
  setSize,
  stirlingS2,
  unit,
  bellNumbers,
  eigs,
  fermiCoupling,
  gravity,
  kldivergence,
  mean,
  molarVolume,
  planckConstant,
  quantumOfCirculation,
  variance,
  classicalElectronRadius,
  median,
  parse,
  planckTime,
  resolve,
  simplifyConstant,
  std,
  compile,
  evaluate,
  mad,
  simplifyCore,
  help,
  norm,
  rotationMatrix,
  simplify,
  symbolicEqual,
  derivative,
  parser,
  rotate,
  leafCount,
  rationalize,
  schur,
  sylvester,
  lyap,
  config
});
_extends(mathWithTransform, math, {
  filter: createFilterTransform({
    typed
  }),
  forEach: createForEachTransform({
    typed
  }),
  map: createMapTransform({
    typed
  }),
  apply: createApplyTransform({
    isInteger,
    typed
  }),
  subset: createSubsetTransform({
    matrix,
    typed
  }),
  concat: createConcatTransform({
    isInteger,
    matrix,
    typed
  }),
  max: createMaxTransform({
    config,
    larger,
    numeric,
    typed
  }),
  sum: createSumTransform({
    add,
    config,
    numeric,
    typed
  }),
  min: createMinTransform({
    config,
    numeric,
    smaller,
    typed
  }),
  cumsum: createCumSumTransform({
    add,
    typed,
    unaryPlus
  }),
  diff: createDiffTransform({
    bignumber,
    matrix,
    number,
    subtract,
    typed
  }),
  index: createIndexTransform({
    Index
  }),
  range: createRangeTransform({
    bignumber,
    matrix,
    config,
    larger,
    largerEq,
    smaller,
    smallerEq,
    typed
  }),
  row: createRowTransform({
    Index,
    matrix,
    range,
    typed
  }),
  column: createColumnTransform({
    Index,
    matrix,
    range,
    typed
  }),
  mean: createMeanTransform({
    add,
    divide,
    typed
  }),
  variance: createVarianceTransform({
    add,
    apply,
    divide,
    isNaN,
    multiply,
    subtract,
    typed
  }),
  std: createStdTransform({
    map,
    sqrt,
    typed,
    variance
  })
});
_extends(classes, {
  BigNumber,
  Complex,
  Fraction,
  Matrix,
  Node,
  ObjectNode,
  OperatorNode,
  ParenthesisNode,
  Range,
  RelationalNode,
  ResultSet,
  ArrayNode,
  BlockNode,
  ConditionalNode,
  ConstantNode,
  DenseMatrix,
  RangeNode,
  Chain,
  FunctionAssignmentNode,
  SparseMatrix,
  AccessorNode,
  IndexNode,
  AssignmentNode,
  ImmutableDenseMatrix,
  Index,
  FibonacciHeap,
  Spa,
  Unit,
  SymbolNode,
  FunctionNode,
  Help,
  Parser
});
Chain.createProxy(math);
export { embeddedDocs as docs } from '../expression/embeddedDocs/embeddedDocs.js';