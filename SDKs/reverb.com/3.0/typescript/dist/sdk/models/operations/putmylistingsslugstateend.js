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
var PutMyListingsSlugStateEndPathParams = /** @class */ (function (_super) {
    __extends(PutMyListingsSlugStateEndPathParams, _super);
    function PutMyListingsSlugStateEndPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" }),
        __metadata("design:type", String)
    ], PutMyListingsSlugStateEndPathParams.prototype, "slug", void 0);
    return PutMyListingsSlugStateEndPathParams;
}(SpeakeasyBase));
export { PutMyListingsSlugStateEndPathParams };
export var PutMyListingsSlugStateEndRequestBodyReasonEnum;
(function (PutMyListingsSlugStateEndRequestBodyReasonEnum) {
    PutMyListingsSlugStateEndRequestBodyReasonEnum["NotSold"] = "not_sold";
    PutMyListingsSlugStateEndRequestBodyReasonEnum["ReverbSale"] = "reverb_sale";
})(PutMyListingsSlugStateEndRequestBodyReasonEnum || (PutMyListingsSlugStateEndRequestBodyReasonEnum = {}));
var PutMyListingsSlugStateEndRequestBody = /** @class */ (function (_super) {
    __extends(PutMyListingsSlugStateEndRequestBody, _super);
    function PutMyListingsSlugStateEndRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], PutMyListingsSlugStateEndRequestBody.prototype, "reason", void 0);
    return PutMyListingsSlugStateEndRequestBody;
}(SpeakeasyBase));
export { PutMyListingsSlugStateEndRequestBody };
var PutMyListingsSlugStateEndSecurity = /** @class */ (function (_super) {
    __extends(PutMyListingsSlugStateEndSecurity, _super);
    function PutMyListingsSlugStateEndSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PutMyListingsSlugStateEndSecurity.prototype, "oauth2", void 0);
    return PutMyListingsSlugStateEndSecurity;
}(SpeakeasyBase));
export { PutMyListingsSlugStateEndSecurity };
var PutMyListingsSlugStateEndRequest = /** @class */ (function (_super) {
    __extends(PutMyListingsSlugStateEndRequest, _super);
    function PutMyListingsSlugStateEndRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutMyListingsSlugStateEndPathParams)
    ], PutMyListingsSlugStateEndRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutMyListingsSlugStateEndRequestBody)
    ], PutMyListingsSlugStateEndRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutMyListingsSlugStateEndSecurity)
    ], PutMyListingsSlugStateEndRequest.prototype, "security", void 0);
    return PutMyListingsSlugStateEndRequest;
}(SpeakeasyBase));
export { PutMyListingsSlugStateEndRequest };
var PutMyListingsSlugStateEndResponse = /** @class */ (function (_super) {
    __extends(PutMyListingsSlugStateEndResponse, _super);
    function PutMyListingsSlugStateEndResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutMyListingsSlugStateEndResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutMyListingsSlugStateEndResponse.prototype, "statusCode", void 0);
    return PutMyListingsSlugStateEndResponse;
}(SpeakeasyBase));
export { PutMyListingsSlugStateEndResponse };
