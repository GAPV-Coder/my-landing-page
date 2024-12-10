import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import {cn} from '@/lib/utils';
import en from '../../presentation/assets/flags/en.svg';
import es from '../../presentation/assets/flags/es.svg';

const Switch = React.forwardRef<
    React.ElementRef<typeof SwitchPrimitives.Root>,
    React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({className, ...props}, ref) => (
    <SwitchPrimitives.Root
        className={cn(
            'peer relative inline-flex h-6 w-16 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-titleColor data-[state=unchecked]:bg-titleColor',
            className,
        )}
        {...props}
        ref={ref}>
        <div className="absolute flex items-center justify-between w-full px-2 gap-3 text-xs text-gray-500">
            <span className="data-[state=checked]:text-purpleDark lato-black -ml-1">
                <img src={es} alt="Flag.svg" className="w-4 h-4 rounded-full" />
            </span>
            <span className="data-[state=unchecked]:text-purpleDark lato-black">
                <img src={en} alt="Flag.svg" className="w-4 h-4 rounded-full" />
            </span>
        </div>
        <SwitchPrimitives.Thumb
            className={cn(
                'pointer-events-none block h-5 w-5 rounded-full bg-whiteCustom shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-7 data-[state=unchecked]:translate-x-0 data-[state=checked]:bg-bgCardColor data-[state=unchecked]:bg-bgCardColor',
            )}
        />
    </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export {Switch};
