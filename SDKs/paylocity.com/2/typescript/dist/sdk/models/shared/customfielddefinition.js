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
var CustomFieldDefinitionValues = /** @class */ (function (_super) {
    __extends(CustomFieldDefinitionValues, _super);
    function CustomFieldDefinitionValues() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], CustomFieldDefinitionValues.prototype, "code", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CustomFieldDefinitionValues.prototype, "description", void 0);
    return CustomFieldDefinitionValues;
}(SpeakeasyBase));
export { CustomFieldDefinitionValues };
var CustomFieldDefinition = /** @class */ (function (_super) {
    __extends(CustomFieldDefinition, _super);
    function CustomFieldDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], CustomFieldDefinition.prototype, "category", void 0);
    __decorate([
        Metadata({ data: "json, name=defaultValue" }),
        __metadata("design:type", String)
    ], CustomFieldDefinition.prototype, "defaultValue", void 0);
    __decorate([
        Metadata({ data: "json, name=isRequired" }),
        __metadata("design:type", Boolean)
    ], CustomFieldDefinition.prototype, "isRequired", void 0);
    __decorate([
        Metadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], CustomFieldDefinition.prototype, "label", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CustomFieldDefinition.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "json, name=values", elemType: shared.CustomFieldDefinitionValues }),
        __metadata("design:type", Array)
    ], CustomFieldDefinition.prototype, "values", void 0);
    return CustomFieldDefinition;
}(SpeakeasyBase));
export { CustomFieldDefinition };
