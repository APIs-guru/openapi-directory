import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Comic extends SpeakeasyBase {
  @SpeakeasyMetadata()
  alt?: string;

  @SpeakeasyMetadata()
  day?: string;

  @SpeakeasyMetadata()
  img?: string;

  @SpeakeasyMetadata()
  link?: string;

  @SpeakeasyMetadata()
  month?: string;

  @SpeakeasyMetadata()
  news?: string;

  @SpeakeasyMetadata()
  num?: number;

  @SpeakeasyMetadata()
  safeTitle?: string;

  @SpeakeasyMetadata()
  title?: string;

  @SpeakeasyMetadata()
  transcript?: string;

  @SpeakeasyMetadata()
  year?: string;
}
