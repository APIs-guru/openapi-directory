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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export var DeleteIpRecordServerList = [
    "https://voice.twilio.com",
];
var DeleteIpRecordPathParams = /** @class */ (function (_super) {
    __extends(DeleteIpRecordPathParams, _super);
    function DeleteIpRecordPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteIpRecordPathParams.prototype, "sid", void 0);
    return DeleteIpRecordPathParams;
}(SpeakeasyBase));
export { DeleteIpRecordPathParams };
var DeleteIpRecordSecurity = /** @class */ (function (_super) {
    __extends(DeleteIpRecordSecurity, _super);
    function DeleteIpRecordSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteIpRecordSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteIpRecordSecurity;
}(SpeakeasyBase));
export { DeleteIpRecordSecurity };
var DeleteIpRecordRequest = /** @class */ (function (_super) {
    __extends(DeleteIpRecordRequest, _super);
    function DeleteIpRecordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteIpRecordRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteIpRecordPathParams)
    ], DeleteIpRecordRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteIpRecordSecurity)
    ], DeleteIpRecordRequest.prototype, "security", void 0);
    return DeleteIpRecordRequest;
}(SpeakeasyBase));
export { DeleteIpRecordRequest };
var DeleteIpRecordResponse = /** @class */ (function (_super) {
    __extends(DeleteIpRecordResponse, _super);
    function DeleteIpRecordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteIpRecordResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteIpRecordResponse.prototype, "statusCode", void 0);
    return DeleteIpRecordResponse;
}(SpeakeasyBase));
export { DeleteIpRecordResponse };
