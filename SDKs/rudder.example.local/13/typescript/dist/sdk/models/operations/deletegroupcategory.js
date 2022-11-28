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
var DeleteGroupCategoryPathParams = /** @class */ (function (_super) {
    __extends(DeleteGroupCategoryPathParams, _super);
    function DeleteGroupCategoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupCategoryId" }),
        __metadata("design:type", String)
    ], DeleteGroupCategoryPathParams.prototype, "groupCategoryId", void 0);
    return DeleteGroupCategoryPathParams;
}(SpeakeasyBase));
export { DeleteGroupCategoryPathParams };
export var DeleteGroupCategory200ApplicationJsonActionEnum;
(function (DeleteGroupCategory200ApplicationJsonActionEnum) {
    DeleteGroupCategory200ApplicationJsonActionEnum["DeleteGroupCategory"] = "DeleteGroupCategory";
})(DeleteGroupCategory200ApplicationJsonActionEnum || (DeleteGroupCategory200ApplicationJsonActionEnum = {}));
var DeleteGroupCategory200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(DeleteGroupCategory200ApplicationJsonData, _super);
    function DeleteGroupCategory200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupCategories", elemType: shared.GroupCategory }),
        __metadata("design:type", Array)
    ], DeleteGroupCategory200ApplicationJsonData.prototype, "groupCategories", void 0);
    return DeleteGroupCategory200ApplicationJsonData;
}(SpeakeasyBase));
export { DeleteGroupCategory200ApplicationJsonData };
export var DeleteGroupCategory200ApplicationJsonResultEnum;
(function (DeleteGroupCategory200ApplicationJsonResultEnum) {
    DeleteGroupCategory200ApplicationJsonResultEnum["Success"] = "success";
    DeleteGroupCategory200ApplicationJsonResultEnum["Error"] = "error";
})(DeleteGroupCategory200ApplicationJsonResultEnum || (DeleteGroupCategory200ApplicationJsonResultEnum = {}));
var DeleteGroupCategory200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteGroupCategory200ApplicationJson, _super);
    function DeleteGroupCategory200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], DeleteGroupCategory200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", DeleteGroupCategory200ApplicationJsonData)
    ], DeleteGroupCategory200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], DeleteGroupCategory200ApplicationJson.prototype, "result", void 0);
    return DeleteGroupCategory200ApplicationJson;
}(SpeakeasyBase));
export { DeleteGroupCategory200ApplicationJson };
var DeleteGroupCategoryRequest = /** @class */ (function (_super) {
    __extends(DeleteGroupCategoryRequest, _super);
    function DeleteGroupCategoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteGroupCategoryPathParams)
    ], DeleteGroupCategoryRequest.prototype, "pathParams", void 0);
    return DeleteGroupCategoryRequest;
}(SpeakeasyBase));
export { DeleteGroupCategoryRequest };
var DeleteGroupCategoryResponse = /** @class */ (function (_super) {
    __extends(DeleteGroupCategoryResponse, _super);
    function DeleteGroupCategoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteGroupCategoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteGroupCategory200ApplicationJson)
    ], DeleteGroupCategoryResponse.prototype, "deleteGroupCategory200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteGroupCategoryResponse.prototype, "statusCode", void 0);
    return DeleteGroupCategoryResponse;
}(SpeakeasyBase));
export { DeleteGroupCategoryResponse };
