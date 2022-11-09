var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export var LISTAVAILABLEPHONENUMBERMOBILE_SERVERS = [
    "https://api.twilio.com",
];
var ListAvailablePhoneNumberMobilePathParams = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberMobilePathParams, _super);
    function ListAvailablePhoneNumberMobilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberMobilePathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=CountryCode" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberMobilePathParams.prototype, "countryCode", void 0);
    return ListAvailablePhoneNumberMobilePathParams;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberMobilePathParams };
var ListAvailablePhoneNumberMobileQueryParams = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberMobileQueryParams, _super);
    function ListAvailablePhoneNumberMobileQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=AreaCode" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberMobileQueryParams.prototype, "areaCode", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Beta" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberMobileQueryParams.prototype, "beta", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Contains" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberMobileQueryParams.prototype, "contains", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Distance" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberMobileQueryParams.prototype, "distance", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ExcludeAllAddressRequired" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberMobileQueryParams.prototype, "excludeAllAddressRequired", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ExcludeForeignAddressRequired" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberMobileQueryParams.prototype, "excludeForeignAddressRequired", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ExcludeLocalAddressRequired" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberMobileQueryParams.prototype, "excludeLocalAddressRequired", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=FaxEnabled" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberMobileQueryParams.prototype, "faxEnabled", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=InLata" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberMobileQueryParams.prototype, "inLata", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=InLocality" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberMobileQueryParams.prototype, "inLocality", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=InPostalCode" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberMobileQueryParams.prototype, "inPostalCode", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=InRateCenter" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberMobileQueryParams.prototype, "inRateCenter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=InRegion" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberMobileQueryParams.prototype, "inRegion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MmsEnabled" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberMobileQueryParams.prototype, "mmsEnabled", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NearLatLong" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberMobileQueryParams.prototype, "nearLatLong", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=NearNumber" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberMobileQueryParams.prototype, "nearNumber", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberMobileQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=SmsEnabled" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberMobileQueryParams.prototype, "smsEnabled", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=VoiceEnabled" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberMobileQueryParams.prototype, "voiceEnabled", void 0);
    return ListAvailablePhoneNumberMobileQueryParams;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberMobileQueryParams };
var ListAvailablePhoneNumberMobileSecurity = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberMobileSecurity, _super);
    function ListAvailablePhoneNumberMobileSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListAvailablePhoneNumberMobileSecurity.prototype, "accountSidAuthToken", void 0);
    return ListAvailablePhoneNumberMobileSecurity;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberMobileSecurity };
var ListAvailablePhoneNumberMobileRequest = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberMobileRequest, _super);
    function ListAvailablePhoneNumberMobileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberMobileRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAvailablePhoneNumberMobilePathParams)
    ], ListAvailablePhoneNumberMobileRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAvailablePhoneNumberMobileQueryParams)
    ], ListAvailablePhoneNumberMobileRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAvailablePhoneNumberMobileSecurity)
    ], ListAvailablePhoneNumberMobileRequest.prototype, "security", void 0);
    return ListAvailablePhoneNumberMobileRequest;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberMobileRequest };
var ListAvailablePhoneNumberMobileListAvailablePhoneNumberMobileResponse = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberMobileListAvailablePhoneNumberMobileResponse, _super);
    function ListAvailablePhoneNumberMobileListAvailablePhoneNumberMobileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=available_phone_numbers", elemType: shared.ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMobile }),
        __metadata("design:type", Array)
    ], ListAvailablePhoneNumberMobileListAvailablePhoneNumberMobileResponse.prototype, "availablePhoneNumbers", void 0);
    __decorate([
        Metadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberMobileListAvailablePhoneNumberMobileResponse.prototype, "end", void 0);
    __decorate([
        Metadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberMobileListAvailablePhoneNumberMobileResponse.prototype, "firstPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberMobileListAvailablePhoneNumberMobileResponse.prototype, "nextPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberMobileListAvailablePhoneNumberMobileResponse.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberMobileListAvailablePhoneNumberMobileResponse.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberMobileListAvailablePhoneNumberMobileResponse.prototype, "previousPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberMobileListAvailablePhoneNumberMobileResponse.prototype, "start", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberMobileListAvailablePhoneNumberMobileResponse.prototype, "uri", void 0);
    return ListAvailablePhoneNumberMobileListAvailablePhoneNumberMobileResponse;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberMobileListAvailablePhoneNumberMobileResponse };
var ListAvailablePhoneNumberMobileResponse = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberMobileResponse, _super);
    function ListAvailablePhoneNumberMobileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberMobileResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListAvailablePhoneNumberMobileListAvailablePhoneNumberMobileResponse)
    ], ListAvailablePhoneNumberMobileResponse.prototype, "listAvailablePhoneNumberMobileResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberMobileResponse.prototype, "statusCode", void 0);
    return ListAvailablePhoneNumberMobileResponse;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberMobileResponse };
