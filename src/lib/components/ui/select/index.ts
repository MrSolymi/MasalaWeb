import { Select as SelectPrimitive } from 'bits-ui';
import Content from './select-content.svelte';
import Item from './select-item.svelte';
import Trigger from './select-trigger.svelte';

const Root = SelectPrimitive.Root;
const Value = SelectPrimitive.Value;

export {
	Root,
	Value,
	Trigger,
	Content,
	Item,
	//
	Root as Select,
	Value as SelectValue,
	Trigger as SelectTrigger,
	Content as SelectContent,
	Item as SelectItem
};
