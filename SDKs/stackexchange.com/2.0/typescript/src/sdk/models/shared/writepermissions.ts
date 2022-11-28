import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WritePermissions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  canAdd?: boolean;

  @SpeakeasyMetadata()
  canDelete?: boolean;

  @SpeakeasyMetadata()
  canEdit?: boolean;

  @SpeakeasyMetadata()
  maxDailyActions?: number;

  @SpeakeasyMetadata()
  minSecondsBetweenActions?: number;

  @SpeakeasyMetadata()
  objectType?: string;

  @SpeakeasyMetadata()
  userId?: number;
}
