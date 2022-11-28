import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FindUsersByUsernameQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=expansions" })
  expansions?: shared.UserExpansionsParameterEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=media.fields" })
  mediaFields?: shared.MediaFieldsParameterEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=place.fields" })
  placeFields?: shared.PlaceFieldsParameterEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=poll.fields" })
  pollFields?: shared.PollFieldsParameterEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=tweet.fields" })
  tweetFields?: shared.TweetFieldsParameterEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=user.fields" })
  userFields?: shared.UserFieldsParameterEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=usernames" })
  usernames: string[];
}


export class FindUsersByUsernameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: FindUsersByUsernameQueryParams;
}


export class FindUsersByUsernameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: any;

  @SpeakeasyMetadata()
  problem?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userLookupResponse?: shared.UserLookupResponse;
}
