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
var DeleteDirectivePathParams = /** @class */ (function (_super) {
    __extends(DeleteDirectivePathParams, _super);
    function DeleteDirectivePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=directiveId" }),
        __metadata("design:type", String)
    ], DeleteDirectivePathParams.prototype, "directiveId", void 0);
    return DeleteDirectivePathParams;
}(SpeakeasyBase));
export { DeleteDirectivePathParams };
export var DeleteDirective200ApplicationJsonActionEnum;
(function (DeleteDirective200ApplicationJsonActionEnum) {
    DeleteDirective200ApplicationJsonActionEnum["DeleteDirective"] = "deleteDirective";
})(DeleteDirective200ApplicationJsonActionEnum || (DeleteDirective200ApplicationJsonActionEnum = {}));
var DeleteDirective200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(DeleteDirective200ApplicationJsonData, _super);
    function DeleteDirective200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=directives", elemType: shared.Directive }),
        __metadata("design:type", Array)
    ], DeleteDirective200ApplicationJsonData.prototype, "directives", void 0);
    return DeleteDirective200ApplicationJsonData;
}(SpeakeasyBase));
export { DeleteDirective200ApplicationJsonData };
export var DeleteDirective200ApplicationJsonResultEnum;
(function (DeleteDirective200ApplicationJsonResultEnum) {
    DeleteDirective200ApplicationJsonResultEnum["Success"] = "success";
    DeleteDirective200ApplicationJsonResultEnum["Error"] = "error";
})(DeleteDirective200ApplicationJsonResultEnum || (DeleteDirective200ApplicationJsonResultEnum = {}));
var DeleteDirective200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDirective200ApplicationJson, _super);
    function DeleteDirective200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], DeleteDirective200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", DeleteDirective200ApplicationJsonData)
    ], DeleteDirective200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], DeleteDirective200ApplicationJson.prototype, "result", void 0);
    return DeleteDirective200ApplicationJson;
}(SpeakeasyBase));
export { DeleteDirective200ApplicationJson };
var DeleteDirectiveRequest = /** @class */ (function (_super) {
    __extends(DeleteDirectiveRequest, _super);
    function DeleteDirectiveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDirectivePathParams)
    ], DeleteDirectiveRequest.prototype, "pathParams", void 0);
    return DeleteDirectiveRequest;
}(SpeakeasyBase));
export { DeleteDirectiveRequest };
var DeleteDirectiveResponse = /** @class */ (function (_super) {
    __extends(DeleteDirectiveResponse, _super);
    function DeleteDirectiveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteDirectiveResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteDirectiveResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDirective200ApplicationJson)
    ], DeleteDirectiveResponse.prototype, "deleteDirective200ApplicationJsonObject", void 0);
    return DeleteDirectiveResponse;
}(SpeakeasyBase));
export { DeleteDirectiveResponse };
