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
var GroupDetailsPathParams = /** @class */ (function (_super) {
    __extends(GroupDetailsPathParams, _super);
    function GroupDetailsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" }),
        __metadata("design:type", String)
    ], GroupDetailsPathParams.prototype, "groupId", void 0);
    return GroupDetailsPathParams;
}(SpeakeasyBase));
export { GroupDetailsPathParams };
export var GroupDetails200ApplicationJsonActionEnum;
(function (GroupDetails200ApplicationJsonActionEnum) {
    GroupDetails200ApplicationJsonActionEnum["GroupDetails"] = "groupDetails";
})(GroupDetails200ApplicationJsonActionEnum || (GroupDetails200ApplicationJsonActionEnum = {}));
var GroupDetails200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GroupDetails200ApplicationJsonData, _super);
    function GroupDetails200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groups", elemType: shared.Group }),
        __metadata("design:type", Array)
    ], GroupDetails200ApplicationJsonData.prototype, "groups", void 0);
    return GroupDetails200ApplicationJsonData;
}(SpeakeasyBase));
export { GroupDetails200ApplicationJsonData };
export var GroupDetails200ApplicationJsonResultEnum;
(function (GroupDetails200ApplicationJsonResultEnum) {
    GroupDetails200ApplicationJsonResultEnum["Success"] = "success";
    GroupDetails200ApplicationJsonResultEnum["Error"] = "error";
})(GroupDetails200ApplicationJsonResultEnum || (GroupDetails200ApplicationJsonResultEnum = {}));
var GroupDetails200ApplicationJson = /** @class */ (function (_super) {
    __extends(GroupDetails200ApplicationJson, _super);
    function GroupDetails200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], GroupDetails200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GroupDetails200ApplicationJsonData)
    ], GroupDetails200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], GroupDetails200ApplicationJson.prototype, "result", void 0);
    return GroupDetails200ApplicationJson;
}(SpeakeasyBase));
export { GroupDetails200ApplicationJson };
var GroupDetailsRequest = /** @class */ (function (_super) {
    __extends(GroupDetailsRequest, _super);
    function GroupDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupDetailsPathParams)
    ], GroupDetailsRequest.prototype, "pathParams", void 0);
    return GroupDetailsRequest;
}(SpeakeasyBase));
export { GroupDetailsRequest };
var GroupDetailsResponse = /** @class */ (function (_super) {
    __extends(GroupDetailsResponse, _super);
    function GroupDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GroupDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GroupDetailsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GroupDetails200ApplicationJson)
    ], GroupDetailsResponse.prototype, "groupDetails200ApplicationJsonObject", void 0);
    return GroupDetailsResponse;
}(SpeakeasyBase));
export { GroupDetailsResponse };
