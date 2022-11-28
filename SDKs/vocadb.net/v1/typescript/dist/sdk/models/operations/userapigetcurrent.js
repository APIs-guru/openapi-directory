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
export var UserApiGetCurrentFieldsEnum;
(function (UserApiGetCurrentFieldsEnum) {
    UserApiGetCurrentFieldsEnum["None"] = "None";
    UserApiGetCurrentFieldsEnum["KnownLanguages"] = "KnownLanguages";
    UserApiGetCurrentFieldsEnum["MainPicture"] = "MainPicture";
    UserApiGetCurrentFieldsEnum["OldUsernames"] = "OldUsernames";
})(UserApiGetCurrentFieldsEnum || (UserApiGetCurrentFieldsEnum = {}));
var UserApiGetCurrentQueryParams = /** @class */ (function (_super) {
    __extends(UserApiGetCurrentQueryParams, _super);
    function UserApiGetCurrentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], UserApiGetCurrentQueryParams.prototype, "fields", void 0);
    return UserApiGetCurrentQueryParams;
}(SpeakeasyBase));
export { UserApiGetCurrentQueryParams };
var UserApiGetCurrentRequest = /** @class */ (function (_super) {
    __extends(UserApiGetCurrentRequest, _super);
    function UserApiGetCurrentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UserApiGetCurrentQueryParams)
    ], UserApiGetCurrentRequest.prototype, "queryParams", void 0);
    return UserApiGetCurrentRequest;
}(SpeakeasyBase));
export { UserApiGetCurrentRequest };
var UserApiGetCurrentResponse = /** @class */ (function (_super) {
    __extends(UserApiGetCurrentResponse, _super);
    function UserApiGetCurrentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], UserApiGetCurrentResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UserApiGetCurrentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UserApiGetCurrentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UserForApiContract)
    ], UserApiGetCurrentResponse.prototype, "userForApiContract", void 0);
    return UserApiGetCurrentResponse;
}(SpeakeasyBase));
export { UserApiGetCurrentResponse };
