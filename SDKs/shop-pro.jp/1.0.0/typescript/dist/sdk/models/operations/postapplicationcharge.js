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
var PostApplicationChargeRequestBodyApplicationCharge = /** @class */ (function (_super) {
    __extends(PostApplicationChargeRequestBodyApplicationCharge, _super);
    function PostApplicationChargeRequestBodyApplicationCharge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=application_charge_source_id" }),
        __metadata("design:type", String)
    ], PostApplicationChargeRequestBodyApplicationCharge.prototype, "applicationChargeSourceId", void 0);
    return PostApplicationChargeRequestBodyApplicationCharge;
}(SpeakeasyBase));
export { PostApplicationChargeRequestBodyApplicationCharge };
var PostApplicationChargeRequestBody = /** @class */ (function (_super) {
    __extends(PostApplicationChargeRequestBody, _super);
    function PostApplicationChargeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=application_charge" }),
        __metadata("design:type", PostApplicationChargeRequestBodyApplicationCharge)
    ], PostApplicationChargeRequestBody.prototype, "applicationCharge", void 0);
    return PostApplicationChargeRequestBody;
}(SpeakeasyBase));
export { PostApplicationChargeRequestBody };
var PostApplicationChargeSecurity = /** @class */ (function (_super) {
    __extends(PostApplicationChargeSecurity, _super);
    function PostApplicationChargeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], PostApplicationChargeSecurity.prototype, "oAuth2", void 0);
    return PostApplicationChargeSecurity;
}(SpeakeasyBase));
export { PostApplicationChargeSecurity };
var PostApplicationCharge201ApplicationJsonApplicationCharge = /** @class */ (function (_super) {
    __extends(PostApplicationCharge201ApplicationJsonApplicationCharge, _super);
    function PostApplicationCharge201ApplicationJsonApplicationCharge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PostApplicationCharge201ApplicationJsonApplicationCharge.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=make_date" }),
        __metadata("design:type", Number)
    ], PostApplicationCharge201ApplicationJsonApplicationCharge.prototype, "makeDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=point" }),
        __metadata("design:type", Number)
    ], PostApplicationCharge201ApplicationJsonApplicationCharge.prototype, "point", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=update_date" }),
        __metadata("design:type", Number)
    ], PostApplicationCharge201ApplicationJsonApplicationCharge.prototype, "updateDate", void 0);
    return PostApplicationCharge201ApplicationJsonApplicationCharge;
}(SpeakeasyBase));
export { PostApplicationCharge201ApplicationJsonApplicationCharge };
var PostApplicationCharge201ApplicationJson = /** @class */ (function (_super) {
    __extends(PostApplicationCharge201ApplicationJson, _super);
    function PostApplicationCharge201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=application_charge" }),
        __metadata("design:type", PostApplicationCharge201ApplicationJsonApplicationCharge)
    ], PostApplicationCharge201ApplicationJson.prototype, "applicationCharge", void 0);
    return PostApplicationCharge201ApplicationJson;
}(SpeakeasyBase));
export { PostApplicationCharge201ApplicationJson };
var PostApplicationChargeRequest = /** @class */ (function (_super) {
    __extends(PostApplicationChargeRequest, _super);
    function PostApplicationChargeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostApplicationChargeRequestBody)
    ], PostApplicationChargeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostApplicationChargeSecurity)
    ], PostApplicationChargeRequest.prototype, "security", void 0);
    return PostApplicationChargeRequest;
}(SpeakeasyBase));
export { PostApplicationChargeRequest };
var PostApplicationChargeResponse = /** @class */ (function (_super) {
    __extends(PostApplicationChargeResponse, _super);
    function PostApplicationChargeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostApplicationChargeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostApplicationChargeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostApplicationCharge201ApplicationJson)
    ], PostApplicationChargeResponse.prototype, "postApplicationCharge201ApplicationJsonObject", void 0);
    return PostApplicationChargeResponse;
}(SpeakeasyBase));
export { PostApplicationChargeResponse };
