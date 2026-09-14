export type DemoBounty = {
  bountyId: string;
  name: string;
  status: 'draft' | 'open' | 'frozen' | 'closed';
  baseModelCid: string;
  escrowRemaining: string;
  liftPerDollar: number;
  poisonRejects: number;
  privacyMode: 'federated' | 'mpc' | 'homomorphic';
};

export type DemoSubmission = {
  submissionId: string;
  bountyId: string;
  workerId: string;
  modelCid: string;
  status: 'pending' | 'evaluating' | 'accepted' | 'rejected' | 'quarantined';
};

export type DemoEvaluation = {
  evaluationId: string;
  submissionId: string;
  holdoutImprovementPercent: number;
  publicMetricPercent: number;
  poisonDetected: boolean;
  payoutEligible: boolean;
  snapshotId: string;
};

export type DemoPayout = {
  payoutId: string;
  amount: string;
  status: 'pending' | 'paid' | 'failed' | 'zero';
  holdoutImprovementPercent: number;
  modelCid: string;
};

export type DemoVersion = {
  versionId: string;
  modelCid: string;
  contributorWorkerIds: string[];
  canonical: boolean;
  mergeConflict: boolean;
};

export const DEMO_BOUNTIES: DemoBounty[] = [
  {
    bountyId: 'bty_01JFEDBTYOPEN000000000001',
    name: 'Diabetes holdout lift — round 3',
    status: 'open',
    baseModelCid: 'bafybeigdiabetesbase0001',
    escrowRemaining: '12450.00',
    liftPerDollar: 0.018,
    poisonRejects: 2,
    privacyMode: 'federated',
  },
  {
    bountyId: 'bty_01JFEDBTYFRZN000000000002',
    name: 'Imaging cohort A',
    status: 'frozen',
    baseModelCid: 'bafybeigimagingbase0002',
    escrowRemaining: '8200.00',
    liftPerDollar: 0.011,
    poisonRejects: 0,
    privacyMode: 'mpc',
  },
];

export const DEMO_SUBMISSIONS: DemoSubmission[] = [
  {
    submissionId: 'sub_01JFEDSUB000000000000001',
    bountyId: 'bty_01JFEDBTYOPEN000000000001',
    workerId: 'wrk_01JFEDWRK000000000000001',
    modelCid: 'bafybeigworkerdelta0001',
    status: 'evaluating',
  },
  {
    submissionId: 'sub_01JFEDSUB000000000000002',
    bountyId: 'bty_01JFEDBTYOPEN000000000001',
    workerId: 'wrk_01JFEDWRK000000000000002',
    modelCid: 'bafybeigpoisonattempt01',
    status: 'rejected',
  },
];

export const DEMO_EVALS: DemoEvaluation[] = [
  {
    evaluationId: 'vld_01JFEDEVL000000000000001',
    submissionId: 'sub_01JFEDSUB000000000000001',
    holdoutImprovementPercent: 2.4,
    publicMetricPercent: 1.1,
    poisonDetected: false,
    payoutEligible: true,
    snapshotId: 'snp_01JFEDSNP000000000000001',
  },
  {
    evaluationId: 'vld_01JFEDEVL000000000000002',
    submissionId: 'sub_01JFEDSUB000000000000002',
    holdoutImprovementPercent: -0.8,
    publicMetricPercent: 3.2,
    poisonDetected: true,
    payoutEligible: false,
    snapshotId: 'snp_01JFEDSNP000000000000001',
  },
];

export const DEMO_PAYOUTS: DemoPayout[] = [
  {
    payoutId: 'rwd_01JFEDRWD000000000000001',
    amount: '420.00',
    status: 'paid',
    holdoutImprovementPercent: 2.4,
    modelCid: 'bafybeigworkerdelta0001',
  },
  {
    payoutId: 'rwd_01JFEDRWD000000000000002',
    amount: '0.00',
    status: 'zero',
    holdoutImprovementPercent: -0.8,
    modelCid: 'bafybeigpoisonattempt01',
  },
];

export const DEMO_VERSIONS: DemoVersion[] = [
  {
    versionId: 'lng_01JFEDLNG000000000000001',
    modelCid: 'bafybeigcanonicalv3',
    contributorWorkerIds: ['wrk_01JFEDWRK000000000000001'],
    canonical: true,
    mergeConflict: false,
  },
];
