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
export var ListDirectives200ApplicationJsonActionEnum;
(function (ListDirectives200ApplicationJsonActionEnum) {
    ListDirectives200ApplicationJsonActionEnum["ListDirectives"] = "listDirectives";
})(ListDirectives200ApplicationJsonActionEnum || (ListDirectives200ApplicationJsonActionEnum = {}));
var ListDirectives200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ListDirectives200ApplicationJsonData, _super);
    function ListDirectives200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=directives", elemType: shared.Directive }),
        __metadata("design:type", Array)
    ], ListDirectives200ApplicationJsonData.prototype, "directives", void 0);
    return ListDirectives200ApplicationJsonData;
}(SpeakeasyBase));
export { ListDirectives200ApplicationJsonData };
export var ListDirectives200ApplicationJsonResultEnum;
(function (ListDirectives200ApplicationJsonResultEnum) {
    ListDirectives200ApplicationJsonResultEnum["Success"] = "success";
    ListDirectives200ApplicationJsonResultEnum["Error"] = "error";
})(ListDirectives200ApplicationJsonResultEnum || (ListDirectives200ApplicationJsonResultEnum = {}));
var ListDirectives200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListDirectives200ApplicationJson, _super);
    function ListDirectives200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ListDirectives200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", ListDirectives200ApplicationJsonData)
    ], ListDirectives200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], ListDirectives200ApplicationJson.prototype, "result", void 0);
    return ListDirectives200ApplicationJson;
}(SpeakeasyBase));
export { ListDirectives200ApplicationJson };
var ListDirectivesResponse = /** @class */ (function (_super) {
    __extends(ListDirectivesResponse, _super);
    function ListDirectivesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListDirectivesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListDirectivesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListDirectives200ApplicationJson)
    ], ListDirectivesResponse.prototype, "listDirectives200ApplicationJsonObject", void 0);
    return ListDirectivesResponse;
}(SpeakeasyBase));
export { ListDirectivesResponse };
