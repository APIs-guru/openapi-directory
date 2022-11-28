import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class V3Outlet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=outlet_business" })
  outletBusiness?: string;

  @SpeakeasyMetadata({ data: "json, name=outlet_business_hour_fri" })
  outletBusinessHourFri?: string;

  @SpeakeasyMetadata({ data: "json, name=outlet_business_hour_mon" })
  outletBusinessHourMon?: string;

  @SpeakeasyMetadata({ data: "json, name=outlet_business_hour_sat" })
  outletBusinessHourSat?: string;

  @SpeakeasyMetadata({ data: "json, name=outlet_business_hour_sun" })
  outletBusinessHourSun?: string;

  @SpeakeasyMetadata({ data: "json, name=outlet_business_hour_thur" })
  outletBusinessHourThur?: string;

  @SpeakeasyMetadata({ data: "json, name=outlet_business_hour_tue" })
  outletBusinessHourTue?: string;

  @SpeakeasyMetadata({ data: "json, name=outlet_business_hour_wed" })
  outletBusinessHourWed?: string;

  @SpeakeasyMetadata({ data: "json, name=outlet_latitude" })
  outletLatitude?: number;

  @SpeakeasyMetadata({ data: "json, name=outlet_longitude" })
  outletLongitude?: number;

  @SpeakeasyMetadata({ data: "json, name=outlet_name" })
  outletName?: string;

  @SpeakeasyMetadata({ data: "json, name=outlet_notes" })
  outletNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=outlet_postcode" })
  outletPostcode?: number;

  @SpeakeasyMetadata({ data: "json, name=outlet_slid_spid" })
  outletSlidSpid?: string;

  @SpeakeasyMetadata({ data: "json, name=outlet_suburb" })
  outletSuburb?: string;
}
