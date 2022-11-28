import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Lookup } from "./lookup";



export class BaseGroup extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: string;

  @SpeakeasyMetadata()
  groupType?: Lookup;

  @SpeakeasyMetadata()
  id?: number;

  @SpeakeasyMetadata()
  lastImportDate?: Date;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  parentCodes?: string[];

  @SpeakeasyMetadata()
  shortName?: string;

  @SpeakeasyMetadata()
  visible?: boolean;

  @SpeakeasyMetadata()
  visibleToJoin?: boolean;
}
