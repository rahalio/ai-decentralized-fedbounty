# Fedbounty — User stories

**Product:** [PRODUCT.md](./PRODUCT.md)


### ML bounty organiser

- As an organiser, I want to post a base model and holdout scoring job, so that I improve accuracy without collecting raw worker data.
- As an organiser, I want reward tiers tied to validation lift percentage, so that payouts match OpenMined Sonar economics.

### Federated worker (data holder)

- As a worker, I want to download the model and train on my local data, so that I earn rewards without exposing my dataset.
- As a worker, I want to see my provisional score on public metrics and final payout on holdout, so that I trust the system is not arbitrary.

### ML platform engineer

- As a platform engineer, I want IPFS content IDs for each submission, so that we avoid 15MB-on-chain cost failures from DanKu.
- As a platform engineer, I want automated rejection of submissions that fail format or timeout rules, so that organiser queues stay clean.

### Compliance officer

- As a compliance officer, I want evidence that validation data never left organiser control, so that GDPR/HIPAA-style minimisation holds.
- As a compliance officer, I want worker enrollment terms prohibiting fake-data poisoning, so that legal remedies exist when holdout gaming is attempted.

### Finance controller

- As a finance controller, I want escrow statements per bounty, so that ML budget drawdowns match verified lifts.

### Platform administrator

- As a platform administrator, I want to freeze a bounty if holdout leakage is suspected, so that the validation set cannot be exfiltrated through side channels.
- As a platform administrator, I want negative-path quarantine when a submission crashes the evaluation sandbox, so that organiser infrastructure is protected.
