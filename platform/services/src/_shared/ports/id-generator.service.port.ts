/**
 * IdGeneratorService Port — starter prefixes (extend in consumer repos).
 */

import type { DomainCode } from '@fedbounty/core/_shared/helpers';

export interface IdGeneratorService {
  tntId(): string;
  keyId(): string;
  idnId(): string;
  autId(): string;
  btyId(): string;
  wrkId(): string;
  enrId(): string;
  subId(): string;
  vldId(): string;
  snpId(): string;
  rwdId(): string;
  escId(): string;
  lngId(): string;
  dspId(): string;
  rptId(): string;
  generateIdForDomain(domainCode: DomainCode): string;
}
