import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExternalStandard } from "./externalstandard";
import { Feature } from "./feature";
import { Role } from "./role";
import { Route } from "./route";
import { User } from "./user";
import { BaseGroup } from "./basegroup";



export class UserToken extends SpeakeasyBase {
  @SpeakeasyMetadata()
  auditActions?: string[];

  @SpeakeasyMetadata()
  checkSecretWord?: boolean;

  @SpeakeasyMetadata()
  created?: Date;

  @SpeakeasyMetadata()
  expiration?: Date;

  @SpeakeasyMetadata({ elemType: ExternalStandard })
  externalStandards?: ExternalStandard[];

  @SpeakeasyMetadata({ elemType: Feature })
  groupFeatures?: Feature[];

  @SpeakeasyMetadata()
  groupMessagingEnabled?: boolean;

  @SpeakeasyMetadata()
  mustSetSecretWord?: boolean;

  @SpeakeasyMetadata({ elemType: Feature })
  patientFeatures?: Feature[];

  @SpeakeasyMetadata()
  patientMessagingFeatureTypes?: string[];

  @SpeakeasyMetadata({ elemType: Role })
  patientRoles?: Role[];

  @SpeakeasyMetadata({ elemType: Route })
  routes?: Route[];

  @SpeakeasyMetadata()
  secretWord?: string;

  @SpeakeasyMetadata()
  secretWordChoices?: Map<string, any>;

  @SpeakeasyMetadata()
  secretWordIndexes?: string[];

  @SpeakeasyMetadata()
  secretWordSalt?: string;

  @SpeakeasyMetadata()
  secretWordToken?: string;

  @SpeakeasyMetadata({ elemType: Role })
  securityRoles?: Role[];

  @SpeakeasyMetadata()
  shouldEnterCondition?: boolean;

  @SpeakeasyMetadata({ elemType: Feature })
  staffFeatures?: Feature[];

  @SpeakeasyMetadata({ elemType: Role })
  staffRoles?: Role[];

  @SpeakeasyMetadata()
  token?: string;

  @SpeakeasyMetadata()
  user?: User;

  @SpeakeasyMetadata({ elemType: Feature })
  userFeatures?: Feature[];

  @SpeakeasyMetadata({ elemType: BaseGroup })
  userGroups?: BaseGroup[];
}
