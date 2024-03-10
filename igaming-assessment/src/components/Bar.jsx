import TextOnlyChip from './TextOnlyChip'
import SingleFilterChip from './SingleFilterChip'
import MultiFilterChip from './MultiFilterChip'
import RemovableChip from './RemovableChip'
import { chip_type } from '../constant'
import barStyles from '../styles/Bar.module.css'
import { forwardRef } from 'react'

const Bar = forwardRef(function ({ chips, addItemToBar, removeChip, updateSelected }, ref) {

  return (
    <div className={barStyles.bar} id="bar" ref={ref}>
      {
        chips.length > 0 && chips.map((value)=>{
           if (value.type === chip_type.singleFilter) {
            return <SingleFilterChip
              key={value.text}
              {...value}
              addItemToBar={addItemToBar}
            />
          } else if (value.type === chip_type.multiFilter) {
            return <MultiFilterChip
              key={value.text}
              {...value}
              addItemToBar={addItemToBar}
            />
          } else if (value.type === chip_type.site) {
            return <RemovableChip
              key={value.text}
              {...value}
              removeChip={removeChip}
            />
          } else if (value.type === chip_type.category) {
            return <RemovableChip
              key={value.text}
              {...value}
              removeChip={removeChip}
            />
          }
          return <TextOnlyChip
          key={value.text}
          updateSelected={updateSelected}
          {...value} />
        })
      }
    </div>
  );
})

export default Bar