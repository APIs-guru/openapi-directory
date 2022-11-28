import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TagSynonyms extends SpeakeasyBase {
  @SpeakeasyMetadata()
  appliedCount?: number;

  @SpeakeasyMetadata()
  creationDate?: number;

  @SpeakeasyMetadata()
  fromTag?: string;

  @SpeakeasyMetadata()
  lastAppliedDate?: number;

  @SpeakeasyMetadata()
  toTag?: string;
}
