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
var DeleteMyFollowsFollowIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteMyFollowsFollowIdPathParams, _super);
    function DeleteMyFollowsFollowIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=follow_id" }),
        __metadata("design:type", String)
    ], DeleteMyFollowsFollowIdPathParams.prototype, "followId", void 0);
    return DeleteMyFollowsFollowIdPathParams;
}(SpeakeasyBase));
export { DeleteMyFollowsFollowIdPathParams };
var DeleteMyFollowsFollowIdSecurity = /** @class */ (function (_super) {
    __extends(DeleteMyFollowsFollowIdSecurity, _super);
    function DeleteMyFollowsFollowIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeleteMyFollowsFollowIdSecurity.prototype, "oauth2", void 0);
    return DeleteMyFollowsFollowIdSecurity;
}(SpeakeasyBase));
export { DeleteMyFollowsFollowIdSecurity };
var DeleteMyFollowsFollowIdRequest = /** @class */ (function (_super) {
    __extends(DeleteMyFollowsFollowIdRequest, _super);
    function DeleteMyFollowsFollowIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteMyFollowsFollowIdPathParams)
    ], DeleteMyFollowsFollowIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteMyFollowsFollowIdSecurity)
    ], DeleteMyFollowsFollowIdRequest.prototype, "security", void 0);
    return DeleteMyFollowsFollowIdRequest;
}(SpeakeasyBase));
export { DeleteMyFollowsFollowIdRequest };
var DeleteMyFollowsFollowIdResponse = /** @class */ (function (_super) {
    __extends(DeleteMyFollowsFollowIdResponse, _super);
    function DeleteMyFollowsFollowIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteMyFollowsFollowIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteMyFollowsFollowIdResponse.prototype, "statusCode", void 0);
    return DeleteMyFollowsFollowIdResponse;
}(SpeakeasyBase));
export { DeleteMyFollowsFollowIdResponse };
