import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Tags extends SpeakeasyBase {
  @SpeakeasyMetadata()
  count?: number;

  @SpeakeasyMetadata()
  hasSynonyms?: boolean;

  @SpeakeasyMetadata()
  isModeratorOnly?: boolean;

  @SpeakeasyMetadata()
  isRequired?: boolean;

  @SpeakeasyMetadata()
  lastActivityDate?: number;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  synonyms?: any[];

  @SpeakeasyMetadata()
  userId?: number;
}
