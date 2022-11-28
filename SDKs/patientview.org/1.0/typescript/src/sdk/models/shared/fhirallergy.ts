import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";



export class FhirAllergy extends SpeakeasyBase {
  @SpeakeasyMetadata()
  confidenceLevel?: string;

  @SpeakeasyMetadata()
  group?: Group;

  @SpeakeasyMetadata()
  id?: number;

  @SpeakeasyMetadata()
  identifier?: string;

  @SpeakeasyMetadata()
  infoSource?: string;

  @SpeakeasyMetadata()
  reaction?: string;

  @SpeakeasyMetadata()
  recordedDate?: Date;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  substance?: string;

  @SpeakeasyMetadata()
  type?: string;
}
